import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from "../../partiesData";
export default function Party(props) {
    
    
    const [partyNameFromBtn, setPartyNameFromBtn] = useState("x");
    const num=JSON.parse(localStorage.getItem(partyNameFromBtn+"Votes"));
    const [numOfVotes, setNumOfVotes]=useState(0);
    console.log("numOfVotes: ",numOfVotes );
    const [counter, setCounter] = useState(numOfVotes);
    

    function partyVote(partyName) {
        const party = parties.find((n) => {
          return n.partyName === partyName ? n : 0;
        });
        console.log("party", party, "   ");
        if (party != undefined) {
          party.votes =numOfVotes;
          console.log("from undefined: party.votes: ", parseInt(party.votes));
          
        }
      }

  const mystyle = {
    width: "100%",
    height: props.vootes,
    color: "#fff",
    backgroundColor: props.barColor,
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "0.5rem",
    opacity:"0.7"
  };
 

  useEffect(() => {
      console.log("EFECT VV: ", partyNameFromBtn, " v ", counter);
      localStorage.setItem(partyNameFromBtn+"Votes",JSON.stringify(counter));
      setNumOfVotes(JSON.parse(localStorage.getItem(partyNameFromBtn+"Votes")));
      partyVote(partyNameFromBtn);
  });


  


  return (
    <Card className="party">
      <div id="party-name">
        <h3>{props.party} Party</h3>
      </div>
      <div id="party-voting">
        <h5>
          {props.barVotes} {"Votes"}
        </h5>
        {console.log("counter height", counter)}
        <div style={mystyle}></div>
        <button
          id={props.btnId}
          onClick={(e) => {
            setCounter(counter + 1);
            setPartyNameFromBtn(e.target.id);
            setNumOfVotes(numOfVotes+1);
          }}
        >
          Vote For {props.party} Party
        </button>
      </div>
    </Card>
  );
}



