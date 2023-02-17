import './Party.css'
import Card from '../Card'
import React, {useState, useEffect} from "react"

export default function Party(props){
    const [counter, setCounter]=useState(0);
    const mystyle = {
        width: "100%",
        height: (counter*15),
        color: "#fff",
        backgroundColor: props.barColor,
        padding: "10px",
        fontFamily: "Arial",
        marginBottom:'0.5rem'
      };
      console.log(counter);
    return <Card className='party'>
        <h5>{counter} {"Votes"}</h5>
        {console.log("counter height",counter)}
        <div style={mystyle}></div>
    <button onClick={()=>{setCounter(counter+1)}}>Vote For {props.party} Party</button>
    </Card>

}