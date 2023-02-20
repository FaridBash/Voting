import { useState } from "react";
import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'
import parties from "../../partiesData";
export default function VoteIndex(){


  const [voted, setVoted] = useState(false);

  const userVotedBtn = (childData) => {
    setVoted(childData);
    console.log("child data: ",childData);
  }
  localStorage.setItem(localStorage.getItem("welcome-user"),voted)
  const userVotedFromStorage=JSON.parse(localStorage.getItem(localStorage.getItem("welcome-user")));
    // const parties=["cat", "dog", "lion", "horse"];
    // setParties(parties);
    // consoleParties(parties);



    // const [catHight, setCatHight]=useState(catVotes*15);
    return <Card className="vote-index">
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"} btnId={"cat"} didVote={userVotedBtn} voted={userVotedFromStorage}  />
        <Party party={"Dog"} barColor={"#00b4d8"} btnId={"dog"} didVote={userVotedBtn} voted={userVotedFromStorage}/>
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"} btnId={"horse"} didVote={userVotedBtn} voted={userVotedFromStorage} />
        <Party party={"Lion"} barColor={"#0077b6"} btnId={"lion"} didVote={userVotedBtn} voted={userVotedFromStorage} />
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