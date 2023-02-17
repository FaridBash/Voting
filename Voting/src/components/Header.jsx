
import Card from './Card'
import './Header.css'



export default function Header(props){


    return (<Card className='header'>
        <h3></h3>
        <h3>Welcome To The Polling Station</h3>
        <h4>{props.name}</h4>
    </Card>);
}