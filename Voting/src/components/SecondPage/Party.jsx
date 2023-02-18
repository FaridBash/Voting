import "./Party.css";
import Card from "../Card";
import React, { useState, useEffect } from "react";
import parties from '../../partiesData'
export default function Party(props) {

    let votes=0;
    const [partyNameFromBtn, setPartyNameFromBtn] = useState('');
    let numFromStorage=0
    if(localStorage.getItem(partyNameFromBtn)!=null){
        const numFromStorage=parseInt(localStorage.getItem(partyNameFromBtn));
    }else if(localStorage.getItem(partyNameFromBtn)===null){
        numFromStorage=0;
    }
    const [counter, setCounter] = useState(numFromStorage);

    const party=parties.find(n=>{return n.partyName===partyNameFromBtn? n:0 });
    let barHeight=0;
    if(party!=undefined){
       barHeight=party.votes;
    }
    const mystyle = {
    width: "100%",
    height:  barHeight* 15,
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
        {barHeight} {"Votes"}
      </h5>
      {console.log("counter height", counter)}
      <div style={mystyle}></div>
      <button
      id={props.btnId}
        onClick={(e) => {
            setCounter(counter + 1);
            console.log('e.target.id', e.target.id);
            setPartyNameFromBtn(e.target.id);
            // partyVote(partyNameFromBtn);

            localStorage.setItem(e.target.id,0);

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
    console.log("party", party, '   ');
    if(party!=undefined){
        party.votes+=1;
        console.log("from undefined: party.votes: ",party.votes)
        localStorage.setItem(party.partyName,party.votes);
    }

}