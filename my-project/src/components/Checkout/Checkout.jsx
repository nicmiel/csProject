import React, { useContext, useState } from 'react'
import './Checkout.css'
import { ShopContext } from '../../Context/ShopContext'



const Checkout = () => {
    const {code, makeid, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='checkoutitems'>
        <div className="checkoutitems-information">
            <div className="checkoutitems-names">
                <h1>Personal Info</h1>
                <hr />
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <div className="checkoutitems-phone">
                <input type="text" placeholder='Phone Number' />
            </div>
            <div className="checkoutitems-card">
                <h1>Card Info</h1>
                <hr />
                <input className='checkoutitems-card-name' type="text" placeholder='Name on Card' />
                <input className='checkoutitems-card-num' type="text" placeholder='Card Number' />
                <input className='checkoutitems-card-cvv' type="text" placeholder='CVV' />
                <input className='checkoutitems-card-exp' type="text" placeholder='Expiary Date' />
            </div>
        </div>
        <div className="checkoutitems-price">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>£{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>£{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={()=>makeid(5)}>CHECKOUT</button>
                
            </div>
        </div>
    </div>
  )
}

export default Checkout