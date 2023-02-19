import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from "../../partiesData";
export default function Party(props) {
    
  
  const [votes, setVotes]=useState(JSON.parse(localStorage.getItem(props.party)));


  useEffect(() => {
    localStorage.setItem(props.party, votes);

  });

    //  console.log("votes from useEFfect: ", votes);
    


   const mystyle = {
    width: "100%",
    height: votes*3,
    color: "#fff",
    backgroundColor: props.barColor,
    // padding: "10px",
    fontFamily: "Arial",
    marginBottom: "0.5rem",
    opacity:"0.7",
  };


    return (
    <Card className="party">
      <div id="party-name">
        <h3>{props.party} Party</h3>
      </div>
      <div id="party-voting">
        <h5>
          {votes} {"Votes"}
        </h5>
        <div style={mystyle}></div>
        <button
          id={props.btnId}
          onClick={(e) => {
           setVotes(votes+1);
          }}
        >
          Vote For {props.party} Party
        </button>
      </div>
    </Card>
  );


}



