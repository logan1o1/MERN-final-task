import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../css/Login.css";


export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const onClose = () => {
        navigate("/")
    }

    const handleSignup = () => {
        //the handle login btn
    }

  return (
    <div className="login-overlay">
      <div className="login-dialog">
        <span className="close-button" onClick={onClose}>
          &#x2716;
        </span>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign up</button><br />
        <Link
        to={"/login"}
        className='text-blue-500'
        >
        Alredy have an account
        </Link>
      </div>
    </div>
  )
}
