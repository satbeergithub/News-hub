import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import { Route } from 'react-router'
import Navbar from './Navbar'
import PageOne from './PageOne'
import PageSecond from './PageSecond'

function HomeScreen() {

  return (
   <div className='homescreen'>
       <Navbar/>
       <PageOne/>
       <PageSecond/>
   </div>
   
  )
}

export default HomeScreen

