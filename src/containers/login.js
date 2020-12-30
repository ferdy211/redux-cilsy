import React from "react";
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
    const [Name, setName] = React.useState("")
    const [Pass, setPass] = React.useState("")
    const [LogedIn, setLogedIn] = React.useState(false)

    const Submit = () => {
        if (Name === "123" && Pass === "123" ) {
            alert("Signed!!")
            setLogedIn(true)
        }
    }

    if (LogedIn) {
        return(
            <div>
                <Redirect to= "/home" />
            </div>
        )
    }
    
    return (
        <div>
            <h3>Login</h3>
            <input type = "text" placeholder="Email or Phone"  value= {Name} onChange = {e => setName(e.target.value)}></input>
            <br/>
            <input type = "password" placeholder="Password"  value= {Pass} onChange = {e => setPass(e.target.value)}></input>
            <br/>
            <button className="btn btn-primary" onClick={() => Submit(Name, Pass)}>Login</button>
            
            
        </div>
    )

}

export default Login;