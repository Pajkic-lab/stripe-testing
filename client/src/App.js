import React, { Fragment } from 'react'
import StripeButton from './componnents/StripeButton'
import './logo192.png'


const App = () => {
  return (
    <Fragment>
      <h1>Testing Stripe</h1>
    <div className='card'>
      <img src='logo192.png' alt='img' /> <br/>
      <p>price: 9.99$</p>
      <StripeButton price={9.99}/>
    </div>
      <p>the folowing data is for testing: <br />
        4242 4242 4242 4242 --Exp: curent date --CW: 123
      </p>
    </Fragment>
  )
}

export default App

