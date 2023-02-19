
import Card from './Card'
import './Header.css'
import Login from './LoginComp/Login';



export default function Header(props){


    return (<Card className='header'>
        
        <h3 id='polling-station'>The Polling Station</h3>
        <h4 id='welcome-user'>{props.name}</h4>
        <button id='logout' onClick={()=>{
            localStorage.setItem('user','');
            localStorage.setItem('welcome-user','');
         }}
         >Logout</button>
    </Card>);
}