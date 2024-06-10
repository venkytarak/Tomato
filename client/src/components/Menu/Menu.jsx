import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({cat,setCat}) => {
  return (
   <div className="menu" id='menu'>

<h1 className=''>Explore Our Categories</h1>
<p className='menu-text'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, porro?</p>
<p>{cat}</p>
<div className="menu-list">
    {menu_list.map((item,index)=>
    {
        return <div onClick={()=>setCat(prev=>prev==item.menu_name ?"All":item.menu_name)} key={index} className='menu-list-item'>
            <img className={cat==item.menu_name ? "active":""} src={item.menu_image}  alt="" />
            <p>{item.menu_name}</p>
            
        </div>
    })}
</div>
<hr /> 
   </div>
  )
}



export default Menu