import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from '../../partiesData'
export default function Party(props) {

    let votes=0;
  const [counter, setCounter] = useState(0);
  const [partyNameFromBtn, setPartyNameFromBtn] = useState('');
  const mystyle = {
    width: "100%",
    height: counter * 15,
    color: "#fff",
    backgroundColor: props.barColor,
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "0.5rem",
  };
  console.log(counter);


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
            console.log('e.target.id', e.target.id);
            setPartyNameFromBtn(e.target.id);
            
        }}
        >
        Vote For {props.party} Party
      </button>
          </div>
    </Card>
  );
}


function partyVote(partyName, c){

    const party=parties.find(n=>{return n.partyName===partyName? n:0 })
    console.log("party", party, '   ',c);
    party.votes=c;

}