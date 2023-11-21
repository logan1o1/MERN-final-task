import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClose = () => {
    navigate("/");
    document.querySelector(".login-overlay").classList.add("closed");
  };

  const handleLogin = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please eneter correct email");
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login-overlay text-black">
      <div className="login-dialog">
        <span className="close-button" onClick={onClose}>
          &#x2716;
        </span>
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
        <p className="text-blue-500">Forgot password?</p>
        <Link to={"/signup"} className="text-blue-500">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
