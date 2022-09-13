import React from 'react'
// import { useState , useEffect } from 'react'
import { Box  } from '@mui/system'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner.js'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Box >
        {/* <h1>hii Home</h1> */}
        <Navbar />
        <Exercises></Exercises>
      
       <HeroBanner></HeroBanner>
        <SearchExercises></SearchExercises>
       
    </Box>
  )
}

export default Home