import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'

export default function VoteIndex(){


    const parties=[
        {
        partyName : "Cat",
        votes: 0
    },
        {
        partyName : "Dog",
        votes: 0
    },
        {
        partyName : "Horse",
        votes: 0
    },
        {
        partyName : "Lion",
        votes: 0
    },
]


    return <Card className="vote-index">
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"}/>
        <Party party={"Dog"} barColor={"#00b4d8"}/>
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"}/>
        <Party party={"Lion"} barColor={"#0077b6"}/>
        </div>
    </Card>
}