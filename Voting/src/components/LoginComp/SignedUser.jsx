
import Login from "./Login"
import './SignedUser.css'
export default function SignedUser(props){

    const saveUserDataHandler=(userPassedData)=>{
        const userData={...userPassedData};
        console.log("Passed user Data: ",userData);
        props.signedUser(userData);
    }

    return <div className="sign-in">
        <Login onSaveUSerData={saveUserDataHandler} />
    </div>
}