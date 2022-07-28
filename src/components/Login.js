import React, { useState } from "react";
import Data from "./data.json"
import Navbar1 from "./nav";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function login() {
    const email=document.getElementById('Email').value
    const password=document.getElementById('Password').value

console.log(Data,email,password)
        if(email === Data[0].email && password === Data[0].password){
                localStorage.setItem('auth',"00psgwwj7819012n#%$hj18*&")
                window.location.assign("../dashboard")
            }else{
                setError("Incorrect username or password!")
                                
            }

  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <>
      <Navbar1/>
    <div className="addCard1">
    <h2 align="center">Login</h2>
    <div className="Addform">
        <legend>
    <label>Email:</label><br/>
<input type="text" id="Email"/><br/>
<label>Password:</label><br/>
<input type="password" id="Password"/><br/><br/>
<button onClick={()=>login()}>Login</button>
<div className="cancel">
<a href='../'><button>Cancel</button></a>
</div>
<p className="error">{error}</p>
</legend>
    </div>
</div>
</>
  );
}