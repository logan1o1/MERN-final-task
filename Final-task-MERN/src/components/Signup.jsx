import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    document.querySelector(".login-overlay").classList.add("closed");
    navigate("/");
  };

  const handleSignup = async () => {
    let result = await fetch("http://localhost:4000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/");
    }
  });

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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <button onClick={handleSignup}>Sign up</button>
        <br />
        <Link to="/" className="text-blue-500">
          Alredy have an account
        </Link>
      </div>
    </div>
  );
}
