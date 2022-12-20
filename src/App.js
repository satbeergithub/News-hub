import React from 'react'
import { useEffect } from 'react';
import SignupScreen from './Components/LoginForm/SignupScreen'
import {  useDispatch, useSelector } from 'react-redux';
import HomeScreen from './Components/Homescreen/HomeScreen'
import { login, logout, selectuser } from './Components/store/userslice';
import firebase from 'firebase';
import { Switch, Route, Redirect } from 'react-router';
import Sports from './Components/Homescreen/Sports'
import Entertainment from './Components/Homescreen/Entertainment'
import Business   from './Components/Homescreen/Business';

function App() {
  const user=useSelector(selectuser)
  const dispatch = useDispatch()
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        dispatch(login ({
          uid:user.id,
          email:user.email
        }))
      }
      else{
          dispatch(logout)
      }
    })
  
  },[])
  return (
    <div>
      {!user ? 
       <SignupScreen/>
      :
       <Switch > 
          <Route path='/' exact>
             <HomeScreen/>
          </Route>
          <Route path='/home' exact>
          <HomeScreen/>
          </Route>
          <Route path='/sports'>
              <Sports/>
          </Route>
          <Route path='/entertainment'>
             <Entertainment/>
          </Route>
          <Route path='/business'>
                 <Business/>
          </Route>
       </Switch>
      }
    
    </div>
  )
}

export default App