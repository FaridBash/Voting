import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from "../../partiesData";
export default function Party(props) {
    
    
    const [partyNameFromBtn, setPartyNameFromBtn] = useState("");
    let numFromStorage=JSON.parse(localStorage.getItem(partyNameFromBtn));
    const [counter, setCounter] = useState(numFromStorage);

  const party = parties.find((n) => {
    return n.partyName === partyNameFromBtn ? n : 0;
  });
//   let barHeight = counter;
//   if (party != undefined) {
    // barHeight = parseInt(party.votes);
//   }
  const mystyle = {
    width: "100%",
    // height: props.barHeight,
    height: counter * 15,
    color: "#fff",
    backgroundColor: props.barColor,
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "0.5rem",
  };
 

  useEffect(() => {
    partyVote(partyNameFromBtn, counter);
    console.log("EFECT VV: ", partyNameFromBtn, " v ", counter);
  });


  return (
    <Card className="party">
      <div id="party-name">
        <h3>{props.party} Party</h3>
      </div>
      <div id="party-voting">
        <h5>
          {counter} {"Votes"}
        </h5>
        {console.log("counter height", counter)}
        <div style={mystyle}></div>
        <button
          id={props.btnId}
          onClick={(e) => {
            setCounter(counter + 1);
            setPartyNameFromBtn(e.target.id);
            partyVote(partyNameFromBtn, counter)
          }}
        >
          Vote For {props.party} Party
        </button>
      </div>
    </Card>
  );
}


function partyVote(partyName, c) {
  const party = parties.find((n) => {
    return n.partyName === partyName ? n : 0;
  });
  console.log("party", party, "   ");
  if (party != undefined) {
    party.votes = c;
    console.log("from undefined: party.votes: ", parseInt(party.votes));
    localStorage.setItem(party.partyName, party.votes);
  }
}
