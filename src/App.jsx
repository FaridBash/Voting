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
  const [comp, setComp]=useState(<Login/>);
let avilableUser={};
  const getUser=(user)=>{
    console.log("IN APP: ", user);
    setUsername(user.name);
    localStorage.setItem('welcome-user',user.name);
  }

  return (
    <div className="App">
      <div id='header'>
      <Card className='header'>
        
        <h3 id='polling-station'>The Polling Station</h3>
        <h4 id='welcome-user'>{userName}</h4>
        <button id='logout' onClick={()=>{
            localStorage.setItem('user','');
            localStorage.setItem('welcome-user','');
            setComp(<Login/>);
            comp;
         }}
         >Logout</button>
    </Card>
      </div>
      
        
      {console.log(`localStorage.getItem(welcome user)`, localStorage.getItem(`welcome-user`))}
        {
          // localStorage.getItem('welcome-user') != undefined ? <Header name={"Welcome, "+localStorage.getItem('welcome-user')}/>:<Header/>
        }
        {
          localStorage.getItem('user')==='' ? <Login onSaveUSerData={getUser} />:<VoteIndex/>
        }
        {console.log("APPPPP: ",localStorage.getItem('user'))}
        
    </div>
  )
}

export default App
