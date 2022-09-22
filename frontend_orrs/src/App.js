import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Card, CardDeck, Jumbotron} from 'react-bootstrap'
import logouser from "./resources/userlogo.png";
import logo from "./resources/admin-settings-male.png";
import homelogo from "./resources/homelog.jpg";
import aboutlogo from "./resources/aboutlogo.png";
import trainListIcon from "./resources/book-open.svg";

//importing the components
import About from "./components/About";
import TrainList from "./components/TrainList";
import HomeSlider from "./components/HomeSlider";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PaymentMethod from "./components/PaymentMethod";
import PaytmPG from "./components/PaytmPG";
import SBIBankPG from "./components/SBIBankPG";
import ThankYouMessage from "./components/ThankYouMessage";
import adminSignIn from './components/adminSignIn';
import signUpAdmin from './components/sign'
import createTrain from './components/createTrain';
import deleteTrain from "./components/deleteTrain";
//importing the images
// import navImage from "./resources/rrs.jpeg";
import trainicon from "./resources/trainicon.png";
import AdminNavigationBar from "./components/adminNavigationBar";
// import AdminSignup from "./components/AdminSignup";
import sign from "./components/sign";
import UsersList from "./components/Userslist";
import cancelTicket from "./components/cancelTicket";
import Loginuser from "./components/Loginuser";
import LoggedInUser from "./components/LoggedInUser";
import Ticketcheck from "./components/Ticketcheck";
import Noti from "./components/Noti";
import Ticketbook from "./components/Ticketbook";
import Errors from "./components/Errors";

function App() {
  return (
    <Router>
      {/* <div className="navImage">
        <a href="">
          <img src={navImage} />
        </a>
      </div> */}
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:'50px'}}>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
              <img src={homelogo}
                  width="25"
                  height="25"
                  alt="home" />
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link" style={{ color: "white" }}>
              <img src={aboutlogo}
                  width="25"
                  height="25"
                  alt="about" />
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/trainlist"
                className="nav-link"
                style={{ color: "white" }}
              >
                <img src={trainListIcon}
                  width="25"
                  height="25"
                  alt="trains" />
                Train Availability
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/signUp"
                className="nav-link"
                style={{ color: "white" }}
              >
                <img src={logouser}
                  width="25"
                  height="25"
                  alt="user" />
                User
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/login"
                className="nav-link"
                style={{ color: "white" }}
              >
                <img src={logo}
                  width="30"
                  height="30"
                  alt="trains" />
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Switching between components */}
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/trainlist" exact component={TrainList} />
        <Route path="/userlist" exact component={UsersList}/>
        <Route path="/booking" exact component={Ticketbook} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        <Route path="/adminSignIn" exact component={adminSignIn} />
        <Route path="/signUpAdmin" exact component={signUpAdmin} />
        <Route path="/addTrain" exact component={createTrain} />
        <Route path="/delTrain" exact component={deleteTrain} />
        <Route path="/adminNavigation" exact component={AdminNavigationBar} />
        <Route path="/adminProfile" exact component={UsersList} />
        <Route path="/cancelticket" exact component={cancelTicket} />
        <Route path="/loginUser" exact component={Loginuser} />
        <Route path="/userlog" exact component={LoggedInUser} />
        <Route path="/checkBooking" exact component={Ticketcheck} />
        <Route path="/notification" exact component={Noti} />
        <Route path="/about" exact component={About} />
        <Route path="*" exact component={Errors} />

       
      </Switch>
    </Router>
  );
}

export default App;
