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

const Login = () => { 
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

            fetch("/admin/auth", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
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
                  history.push("/login");
                } else {
                  history.push("/adminNavigation");
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
          <Form style={{backgroundColor:'whitesmoke',width:'300px',height:'235px',marginLeft:'600px',marginTop:'60px',borderRadius:'25px'}}>
        <div className="outer">
    <div className="inner">
            <h3 style={{color:"black",fontWeight:"bold",marginTop:'20px'}}>Log in</h3>
            <Field
        name="username"
        type="text"
        placeholder="Enter Admin"
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

      {/* <p>Don't have a account?<Link to="/signUp"> Register Here</Link></p> */}
      </div>
      </div>
    </Form>
    )}
    </Formik>
  );
    }

    export default Login;