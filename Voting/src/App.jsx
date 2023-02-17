// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Login from './components/LoginComp/Login'
import Header from './components/Header'
import SignedUser from './components/LoginComp/SignedUser'
import Party from './components/SecondPage/Party'


import {Bar} from "react-chartjs-2";
import React, {useState, useEffect} from "react"
import VoteIndex from './components/SecondPage/VoteIndex'

function App() {
  

  const onlineUser=(user)=>{
    console.log("IN APP: ", user);
  }

  return (
    <div className="App">
      <Header  />
     
        {
          // localStorage.setItem('user','')
        }
        {
          localStorage.getItem('user')==='' ? <SignedUser signedUser={onlineUser} />:<VoteIndex/>
        }
        {/* <SignedUser signedUser={onlineUser}/> */}
        {console.log("APPPPP: ",localStorage.getItem('user'))}
  
    </div>
  )
}

export default App
