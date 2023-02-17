import './Party.css'
import Card from '../Card'
// import {
//     Chart as ChartJS,
//     categoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js'

// import {Bar} from "react-chartjs-2";
import React, {useState, useEffect} from "react"

export default function Party(props){
    const [counter, setCounter]=useState(0);
    // const [chartData, setChartData]=useState({
    //     datasets:[],
    // });
    // const [chartOptions, setChartOptions]=useState({});

    // useEffect(()=>{
    //     setChartData({
    //         labels:[props.label],
    //         datasets:[
    //             {
    //                 label: "F",
    //                 data:[counter],
    //                 borderColor: "rgb(53, 162, 235)",
    //                 backgroundColor: "rgba(53, 162, 235, 0.4)"
    //             }
    //         ]
    //     });
    //     setChartOptions({
    //         response: true,
    //         Plugins:{
    //             legend:{
    //                 position: "top"
    //             },
    //             title:{
    //                 display: true,
    //                 text:"Farid"
    //             }
    //         }
    //     })
    // }, []);



    return <Card className='party'>
        <div className='voting' style={{height:counter}}></div>
    <button onClick={()=>{setCounter(counter+1)}}>Vote For Cat Party</button>
    </Card>

}