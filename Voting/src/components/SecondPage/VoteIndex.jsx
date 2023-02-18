import { useState } from "react";
import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'
import parties from "../../partiesData";
export default function VoteIndex(){

    const catBar=parties.filter(n=>{if(n.partyName==="cat"){ return n}})[0];
    const catVotes=catBar.votes;
    console.log("catBar", catVotes);
    localStorage.setItem("catVotes",JSON.stringify(catVotes));
    console.log(localStorage.getItem('catVotes'));
    const dogBar=parties.filter(n=>{if(n.partyName==="dog"){ return n}})[0];
    const dogVotes=dogBar.votes;
    const horseBar=parties.filter(n=>{if(n.partyName==="horse"){ return n}})[0];
    const horseVotes=horseBar.votes;
    const lionBar=parties.filter(n=>{if(n.partyName==="lion"){ return n}})[0];
    const lionVotes=lionBar.votes;
    
    // const catBar=localStorage.getItem('cat');
    // const dogBar=localStorage.getItem('dog');
    // const horseBar=localStorage.getItem('horse');
    // const lionBar=localStorage.getItem('lion');
    const [catHight, setCatHight]=useState(catVotes*15);
    return <Card className="vote-index">
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"} btnId={"cat"} vootes={catHight} barVotes={catVotes} />
        <Party party={"Dog"} barColor={"#00b4d8"} btnId={"dog"} vootes={dogVotes *15} barVotes={dogVotes} />
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"} btnId={"horse"} vootes={horseVotes *15} barVotes={horseVotes} />
        <Party party={"Lion"} barColor={"#0077b6"} btnId={"lion"} vootes={lionVotes *15} barVotes={lionVotes} />
        </div>
    </Card>
}