import React, { Component, useContext, useState } from "react";
import { Link} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";




const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!")
});

const Loginuser = () => { 
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('')
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        if (fromUrl) {
          history.push(fromUrl);
        } else {
          history.push("/");
        }
      };

      
        const login = (userData) => {
          try{

            fetch("/user/auth", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                // "accept": "application/json",
                // "Access-Control-Allow-Origin": "*"
                'Access-Control-Allow-Origin': '*'
              },
              "body": JSON.stringify({
                username: userData.username,
                password: userData.password
              })
            })
            .then(response => response.json())
            .then(response => {
              if(response.error){
                // console.log(userData)
                alert('your userId and password is not correct');
              }else {
                if (response.response===" Invalid Credentials..!") {
                  alert("Invalid Credentials . Enter correct credentials ... !")
                  history.push("/loginUser");
                } else {
                    alert("User Loged in ... :)")
                    localStorage.setItem("curUser",userData.username)
                  history.push("/userlog");
                }
                  console.log(response)
                }
              })
              .catch(err => {
                console.log(err);
              });
            }catch(e){
              console.log(e);
            }
            }
            return (
              <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  const userData = { ...values };
                  resetForm();
                  login(userData);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {() => (
                  <Form style={{backgroundColor:'whitesmoke',width:'300px',height:'335px',marginLeft:'600px',marginTop:'60px',borderRadius:'25px'}}>
                <div className="outer">
            <div className="inner">
                    <h3 style={{color:"black",fontWeight:"bold" ,marginTop:'10px'}}>Log in</h3>
                    <Field
                name="username"
                type="text"
                placeholder="Enter username"
                className="form-control my-3"
              
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <br/>
              <button className="btn-sm btn-primary auth-button block" onClick={() => login()} style={{borderRadius:'10px'}}>
                Login
              </button>
                <br></br>
                <br></br>
              <p style={{color:"black",fontWeight:"bold",backgroundColor:'whitesmoke'}}>Don't have a account?<br></br><Link to="/signUp" style={{color:'#6495ED', fontWeight:'normal'}}> Register Here</Link></p>
              </div>
              </div>
            </Form>
            )}
            </Formik>
          );
    }

    export default Loginuser;