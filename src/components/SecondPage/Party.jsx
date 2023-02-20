import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from "../../partiesData";
export default function Party(props) {
    
  
  const [votes, setVotes]=useState(JSON.parse(localStorage.getItem(props.party)));
  const [totalVotes, setTotalVotes]=useState(0);
  const [voteClicked, setVoteClicked]=useState(false);

  useEffect(() => {
    localStorage.setItem(props.party, votes||0);
    
  });
  
  
  useEffect(() => {
    votesCounter(parties);
    props.didVote(voteClicked);
  },[votes]);

  function votesCounter(arr){
    let tot=0;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      const eleV=element.votes||0;
      tot+=eleV;
      setTotalVotes(totalVotes+tot);
      // console.log(totalVotes);
      console.log("my Total",element.votes);
      
    }
  }
    


   const mystyle = {
    width: "100%",
    height: votes*3,
    color: "#fff",
    backgroundColor: props.barColor,
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
        {/* { props.voted===false? <button>confirm</button>:} */}
        <button
        disabled={props.voted}
          id={props.btnId}
          onClick={(e) => {
           setVotes(votes+1);
           setVoteClicked(true);
    
          }}
        >
          Vote For {props.party} Party
        </button>
      </div>
    </Card>
  );


}



