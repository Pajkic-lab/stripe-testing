import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_rqOF71MatEe8ATumTz5n3qmK00uIx88i7l'
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response=> {
            alert('Payment successful')
        }).catch(error=> {
            console.log('Payment error :', JSON.parse(error))
            alert("Ther is a problem with payment. Please use (test) credit card!")
        })
    }
    return (
        <StripeCheckout
         label='Buy'
         name='Some Product'
         billingAddress
         shippingAddress
         image='../logo192.png'
         description={`Total is ${price}`}
         amount={priceForStripe}
         panelLabel='pay now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeButton
