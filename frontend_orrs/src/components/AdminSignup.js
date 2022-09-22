import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export  const AdminSignup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const host = "http://localhost:5000";
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      localStorage.setItem("success", json.success);
      alert("Logged In");
      navigate("/");
    } else {
      alert("Login failed");
      navigate("/login");
    }
    console.log(json);
  };
  return (
    <div className="login">
      <div className="loginHeader">
        <form onSubmit={handleSubmit}>
          <div className="innerLogin">
            <h1>Login</h1>
            <br />
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              value={credentials.email}
              onChange={onChange}
              required
              name="email"
              id="email"
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
            />
            <div className="receiveMail">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value="subscribe"
              />
              &nbsp;
              <label htmlFor="subscribe"> Want to receive mail ?</label>
            </div>
            <br />
            <button type="submit">Login</button>
            <br />
            <a href="">Forgot Password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

