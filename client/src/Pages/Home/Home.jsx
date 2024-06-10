import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FDisplay from '../../components/FoodDisplay/FDisplay'
const Home = () => {
  const [cat,setCat]=useState('All')
  return (
    <>

    <Header/>
    <Menu cat={cat} setCat={setCat}/>
    <FDisplay cat={cat}/>
    </>
  )
}

export default Home