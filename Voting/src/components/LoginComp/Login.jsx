
import './Login.css'
import { users } from '../../data';
import { useState, useEffect } from 'react';
export default function Login(props){

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [loginStatus, setLoginStatus]=useState('');
    const [signedUser, setSignedUser]=useState({});

    const usernameHandler=(e)=>{
        console.log(e.target.value);
        setUsername(e.target.value);
    }
    const passwordHandler=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const loginProcess=(e)=>{
        const user= checkUserExist(username, password);
        if(user===undefined){
            e.preventDefault();
            console.log("DIDNT FIND USER");
            setLoginStatus('Wrong Username/Password');
        }else if(user){
            e.preventDefault();
            setLoginStatus('Success');
            console.log("submit handler: ", user);
            console.log("signed user: ", signedUser);
            setSignedUser(user);
            localStorage.setItem('cat', JSON.stringify(0));
            localStorage.setItem('dog', JSON.stringify(0));
            localStorage.setItem('horse', JSON.stringify(0));
            localStorage.setItem('lion', JSON.stringify(0));
            console.log("localStorage.getItem('cat'): ",localStorage.getItem('cat'));
            console.log("localStorage.getItem('cat') type of: ",localStorage.getItem('cat'));
            console.log("localStorage.getItem('cat') type of parse: ", JSON.parse(localStorage.getItem('cat')));
            return user;
        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        
        props.onSaveUSerData(signedUser);
      });
    
    return <div className="login" >
        <form id='input-holder'>
        <input type="text" placeholder='Username' className='login_input' onChange={usernameHandler}/>
        <input type="password" placeholder='Password' className='login_input' onChange={passwordHandler}/>
        <button type='submit' id='login-btn' onClick={loginProcess}>Login</button>
        <h6 className='wrong'>{loginStatus}</h6>
        </form>
    </div>
}

function checkUserExist(email, password){

    const getUser= users.find((u)=>{
        if(u.email===email){
            if(u.password===password){
                console.log('Login Succeeded');
                localStorage.setItem('user',JSON.stringify(u));
                const myLocalStorageUser=localStorage.getItem('user');
                console.log(myLocalStorageUser);
                
                return u;
            }else{
                console.log("Wrong password");
            }
        }
        
    });
    if(getUser===undefined){
        
    }
    console.log('getUser: ',getUser );
    return getUser;
}