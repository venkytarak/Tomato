import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {


const {cartItems,addtoCart,removefromCart}=useContext(StoreContext);


  return (
   <div className="food-item">
    <div className="food-item-img-container">
      <img src={image} alt="" className="food-item-image" />
      {!cartItems[id] 
        ? <img className='add' src={assets.add_icon_white}  onClick={()=>addtoCart(id)}/>
        :<div className='food-item-container' >
<img src={assets.remove_icon_red} onClick={()=>removefromCart(id)} />
<p>{cartItems[id]}</p>
<img src={assets.add_icon_green} alt=""  onClick={()=>addtoCart(id)}/>
        </div>
       
      }
    </div>
    <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className='food-item-description'>{description}</p>
      <p className='item-price'>${price}</p>
    </div>
   </div>
  )
}

export default FoodItem