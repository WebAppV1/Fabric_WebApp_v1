import React from 'react'
import Navbar from '../components/navbar'
import  ImageBody  from "../components/ImageBody"
import AnimationName from '../components/AnimationName'
import {slides} from  "../utils/cursorData.json"
const Home = () => {
  return (
    <div >
      <Navbar/>
      {/* Navbar is successfully created */}
      <AnimationName/>
      <ImageBody data={slides}/>
      

    </div>
  )
}

export default Home
