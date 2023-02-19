import { useState } from "react";
import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'
import parties from "../../partiesData";
export default function VoteIndex(){

    // const catBar=parties.filter(n=>{if(n.partyName==="cat"){ return n}})[0];
    // const catVotes=catBar.votes;
    // console.log("catBar", catVotes);
    // localStorage.setItem("catVotes",JSON.stringify(catVotes));
    // console.log(localStorage.getItem('catVotes'));
    // const dogBar=parties.filter(n=>{if(n.partyName==="dog"){ return n}})[0];
    // const dogVotes=dogBar.votes;
    // const horseBar=parties.filter(n=>{if(n.partyName==="horse"){ return n}})[0];
    // const horseVotes=horseBar.votes;
    // const lionBar=parties.filter(n=>{if(n.partyName==="lion"){ return n}})[0];
    // const lionVotes=lionBar.votes;
    

    // const parties=["cat", "dog", "lion", "horse"];
    // setParties(parties);
    // consoleParties(parties);



    // const [catHight, setCatHight]=useState(catVotes*15);
    return <Card className="vote-index">
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"} btnId={"cat"} vootes={15} barVotes={15} />
        <Party party={"Dog"} barColor={"#00b4d8"} btnId={"dog"} vootes={15} barVotes={15} />
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"} btnId={"horse"} vootes={15} barVotes={15} />
        <Party party={"Lion"} barColor={"#0077b6"} btnId={"lion"} vootes={15} barVotes={15} />
        </div>
    </Card>
}


function setParties(partyArr){
    
    

    for (let i = 0; i < partyArr.length; i++) {
      const element = partyArr[i];
        const val=JSON.parse(localStorage.getItem(element));

      if(val===undefined || val===null ){
        localStorage.setItem(element, JSON.stringify({
          name: element,
          votes: 0
        }));
    }
    }
  
  }
  
  
  function consoleParties(partyArr){
    for (let i = 0; i < partyArr.length; i++) {
      const element = partyArr[i];
      console.log("new Party Local: ",localStorage.getItem(element));
      
    }
  }