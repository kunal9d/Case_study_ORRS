import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyouimg from "../resources/back7edit.jpg";
import { json } from "body-parser";

class ThankYouMessage extends Component {
  render() {
    return (
      <div class="jumbotron text-center" style={{borderBlockStart: '5px solid grey',borderBlockEnd: '5px solid grey',marginTop:'80px',width:'550px',marginLeft:'500px'}}>
  <h1 class="display-3">Thank You!</h1>
  <p class="lead"><strong>Please check your email</strong> for ticket related informations!!!</p>
  <hr/>
  {/* <p>
    Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
  </p> */}
  <p class="lead">
    <a class="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
  </p>
</div>
    );
  }
}

export default ThankYouMessage;