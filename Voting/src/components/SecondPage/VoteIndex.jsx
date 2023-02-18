import Card from "../Card"
import Party from "./Party"
import './VoteIndex.css'

export default function VoteIndex(){


    return <Card className="vote-index">
        <div className="div-party">
        <Party party={"Cat"} barColor={"#48cae4"} btnId={"cat"}/>
        <Party party={"Dog"} barColor={"#00b4d8"} btnId={"dog"}/>
        </div>
        <div className="div-party">
        <Party party={"Horse"} barColor={"#0096c7"} btnId={"horse"}/>
        <Party party={"Lion"} barColor={"#0077b6"} btnId={"lion"}/>
        </div>
    </Card>
}