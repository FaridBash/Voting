import { useState } from "react";
import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'
import parties from "../../partiesData";
export default function VoteIndex(){


  const userVotedFromStorage=JSON.parse(localStorage.getItem(localStorage.getItem("welcome-user")));
  const [unVotedUserObj, setUnVotedUserObj]=useState(JSON.parse(localStorage.getItem('user')));
  const [voted, setVoted] = useState(userVotedFromStorage);
  const [getPart, setPart]=useState('');
  const userVotedBtn = (childData) => {
    setVoted(childData);
    console.log("child data: ",childData);
  }
  localStorage.setItem(localStorage.getItem("welcome-user"),voted)
  

  const part=(childData)=>{
    console.log(childData);
    setPart(childData);
  }
    // const parties=["cat", "dog", "lion", "horse"];
    // setParties(parties);
    // consoleParties(parties);
    // const [catHight, setCatHight]=useState(catVotes*15);

    if(voted){
      return <div id="edit-vote"> <h4>Do you want to change your mind? Otherwise Logout</h4> <button onClick={()=>{
        setVoted(false);
        localStorage.setItem(getPart, JSON.parse(localStorage.getItem(getPart))-1);
        setUnVotedUserObj({...unVotedUserObj,
          voted:false});
          localStorage.setItem('user', JSON.stringify(unVotedUserObj));
          console.log(unVotedUserObj);
      }}>Edit</button> </div>
    }else{
      return <Card className="vote-index">
        {voted===true ? (<div id="edit-vote"> <h4>Do you want to change your mind? Otherwise Logout</h4> <button onClick={()=>{
        setVoted(false);
        localStorage.setItem(getPart, JSON.parse(localStorage.getItem(getPart))-1);
      }}>Edit</button> </div>) : undefined }
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"} btnId={"cat"} didVote={userVotedBtn} voted={userVotedFromStorage} clickedParty={part}  />
        <Party party={"Dog"} barColor={"#00b4d8"} btnId={"dog"} didVote={userVotedBtn} voted={userVotedFromStorage} clickedParty={part} />
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"} btnId={"horse"} didVote={userVotedBtn} voted={userVotedFromStorage} clickedParty={part} />
        <Party party={"Lion"} barColor={"#0077b6"} btnId={"lion"} didVote={userVotedBtn} voted={userVotedFromStorage} clickedParty={part} />
        </div>
    </Card>
    }
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