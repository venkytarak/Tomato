import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removefromCart} =useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p> 
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>
        {
          if(cartItems[item._id]>0)
            {
              return  (
               <div className="">
                 <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                 <p>{item.name}</p>
                 <p>{item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>{item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removefromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />

               </div>
               
                
              )

            }
        })}
      </div>
<div className="cart-button">
                <div className="cart-total">
                  <h2>cart total</h2>
                
                <div className="cart-total-details">
                  <p>Sub Total</p>
                  <p>{0}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Free</p>
                  <p>{0}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>{0}</b>
                </div>
               
               </div>
               <button> PROCEED TO CHECKOUT</button>

               </div>
               <div className="cart-promocode">
                <div className="">
                  <p>If you Hav a promo code,Enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder='promo code'/>
                    <button>Submit</button>

                  </div>
                </div>
               </div>


    </div>
  )
}

export default Cart