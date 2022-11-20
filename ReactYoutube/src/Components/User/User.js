import axios from 'axios';
import React, { useState } from 'react'
import './User.css'

function User() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (value) => {
        setEmail(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleLogin = () => {
        const url = `http://localhost:8585/api/Users`;
        axios.post(url, null, {
            params: {
                email,
                password
            }
        }).then((res)=>{
            console.log(res.data);
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }


    return (
        <form action="action_page.php" method="post">
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required 
                 onChange={(e)=>handleEmailChange(e.target.value)}/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                 onChange={(e)=>handlePasswordChange(e.target.value)} />
                <button type="submit" onClick={()=> handleLogin()}>Login</button>
            </div>
        </form>
    );
};




export default User