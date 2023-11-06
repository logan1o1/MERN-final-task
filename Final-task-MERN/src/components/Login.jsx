import React, { useState } from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="login-overlay">
      <div className="login-dialog">
        <span className="close-button" onClick={onClose}>
          &#x2716;
        </span>
        <h2>Login</h2>
        <input
          type="text"
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
        <p>Forgot password?</p>
        <p>Create an account</p>
      </div>
    </div>
  );
};

export default Login;
