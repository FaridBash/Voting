// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import Login from "./components/LoginComp/Login";
import Header from "./components/Header";
import Party from "./components/SecondPage/Party";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import VoteIndex from "./components/SecondPage/VoteIndex";

function App() {
  const [comp, setComp] = useState(<Login />);
  const[isAdmin, setIsAdmin]=useState(false);
  const [userName, setUsername] = useState(localStorage.getItem('welcome-user'));
  // const parties=["cat", "dog", "lion", "horse"];
  // setParties(parties);
  // consoleParties(parties);
  // console.log(localStorage.getItem("cat"));
  
  const getUser = (user) => {
    console.log("IN APP: ", user);
    setUsername(user.name);
    localStorage.setItem("welcome-user", user.name);
    user.type==='admin' ? setIsAdmin(true):setIsAdmin(false);
  };
  
  
  return (
    <div className="App">
      <div id="header">
        <Card className="header">
          <h3 id="polling-station">The Polling Station</h3>
          <h4 id="welcome-user">{userName}</h4>
          {isAdmin===true? <button id="admin-btn">Admin Page</button>:''}
          <button
            id="logout"
            onClick={() => {
              localStorage.setItem("user", "");
              localStorage.setItem("welcome-user", "");
              setComp(<Login />);
              comp;
            }}
          >
            Logout
          </button>
        </Card>
      </div>

      {localStorage.getItem("user") === "" ? (
        <Login onSaveUSerData={getUser} />
      ) : (
        <VoteIndex />
      )}
    </div>
  );
}

export default App;


// function setParties(partyArr){

//   for (let i = 0; i < partyArr.length; i++) {
//     const element = partyArr[i];
    
//     if(localStorage.getItem(element)===undefined){
//       localStorage.setItem(element, {
//         name: element,
//         votes:0
//       });
//   }
//   }

// }


// function consoleParties(partyArr){
//   for (let i = 0; i < partyArr.length; i++) {
//     const element = partyArr[i];
//     console.log("new Party Local: ",localStorage.getItem(element));
    
//   }
// }