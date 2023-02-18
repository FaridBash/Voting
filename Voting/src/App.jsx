// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Login from './components/LoginComp/Login'
import Header from './components/Header'
import Party from './components/SecondPage/Party'
import {Bar} from "react-chartjs-2";
import React, {useState, useEffect} from "react"
import VoteIndex from './components/SecondPage/VoteIndex'

function App() {
  const [userName, setUsername]=useState('');
let avilableUser={};
  const getUser=(user)=>{
    console.log("IN APP: ", user);
    setUsername(user.name);
    localStorage.setItem('welcome-user',user.name);
  }

  return (
    <div className="App">
      {/* <Header name={"Welcome, "+userName} /> */}
        
      {console.log(`localStorage.getItem(welcome user)`, localStorage.getItem(`welcome-user`))}
        {
          localStorage.getItem('welcome-user') != undefined ? <Header name={"Welcome, "+localStorage.getItem('welcome-user')}/>:<Header/>
        }
        {
          localStorage.getItem('user')===null ? <Login onSaveUSerData={getUser} />:<VoteIndex/>
        }
        {/* <SignedUser signedUser={onlineUser}/> */}
        {console.log("APPPPP: ",localStorage.getItem('user'))}
  
    </div>
  )
}

export default App
