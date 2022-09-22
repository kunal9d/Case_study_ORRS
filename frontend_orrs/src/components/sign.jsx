import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

const Sign = () => {
  let navigate = useHistory();
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
    phoneNumber: "",
    id:"",
  });
  const host = "http://localhost:9055";
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // // let response = await fetch(`/createadmin`, {
    //   // mode: 'no-cors',
    //   method: "POST",
    //    headers: {
    // //     "Access-Control-Allow-Origin": "http://localhost:3000",
    // //     "accept": "application/json, application/*+json",
    // //     "Access-Control-Allow-Origin": "*",
    // //     "Access-Control-Allow-Methods": "*",
    //    "Content-Type" : "application/json; charset=utf-8"
    //    },
    //   body: JSON.stringify({
    //     userName: credentials.userName,
    //     password: credentials.password,
    //     phoneNumber: credentials.phoneNumber,
    //     id: 1009,
    //   }),
    // });
    try {
      fetch("/admin/createadmin", {
        method: "POST", 
        headers: {
              'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({
                 userName: credentials.userName,
                 password: credentials.password,
                 phoneNumber: credentials.phoneNumber,
                 id: credentials.id,
        }),
      })
      .then(res => res.json())
      .then(res => {
          // if (res.status === 200) {
              console.log(res);
          // } else {
          //     console.log("error");
          // //   setMessag
          const json = res;
          console.log(json);
          if (json.response) {
            console.log("kd");
            localStorage.setItem("token", json.token);
            localStorage.setItem("success", json.success);
            alert("Logged In");
            navigate.push("/");
          } else {
            alert("Login failed");
            navigate.push("/login");
          }
      })
    }
    catch(error){
      console.log(error)
    }
    console.log(credentials);
    // console.log(body.useHistory);

    // console.log(json);
  };

  return (
    <div className="login">
      <div className="loginHeader">
        <form onSubmit={handleSubmit}>
          <div className="innerLogin">
            <h1>Admin Signup</h1>
            <br />
            <label className="form-label" htmlFor="email">Admin Name</label>
            <input
              className="form-control"
              type="text"
              value={credentials.userName}
              onChange={onChange}
              required
              name="userName"
              id="userName"
            />
            <br />
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"

              required
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
            />
            <label className="form-label" htmlFor="password">Phone Number</label>
            <input
              type="number"
              required
              className="form-control"

              name="phoneNumber"
              id="phoneNumber"
              value={credentials.phoneNumber}
              onChange={onChange}
            />
            <br />
            <label className="form-label" htmlFor="id">Id</label>
            <input
              type="number"
              required
              className="form-control"

              name="id"
              id="id"
              value={credentials.id}
              onChange={onChange}
            />
            <br />
            <button type="submit">SignUp
            </button>
            <br />
            <Link to="/login">Login Admin</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
