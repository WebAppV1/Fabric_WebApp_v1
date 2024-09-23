import React from 'react'
import Navbar from '../components/navbar'
import  Body  from "../components/Body"
import AnimationName from '../components/AnimationName'
const Home = () => {
  return (
    <div >
      <Navbar/>
      {/* Navbar is successfully created */}
      <AnimationName/>
      <Body/>
      

    </div>
  )
}

export default Home
