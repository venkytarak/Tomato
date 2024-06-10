import React, { useContext } from 'react'
import './FDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FDisplay = ({cat}) => {
    const {food_list} =useContext(StoreContext)
  return (
   <div className="food-display" id='food-display
   '>
    <h2> Top Dishes near you</h2>
    <div className="food-display-list">
      {food_list.map((item,index)=>
      {
        {console.log(cat,item.cat)}
        if(cat=="All" || cat===item.category)
          {
            
            return  <FoodItem key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image} />

          }




      })}
    </div>
   </div>
  )
}

export default FDisplay