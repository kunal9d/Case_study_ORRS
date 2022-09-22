import React, { Component } from "react";
import { Link } from "react-router-dom";
import ticketlogo from "../../src/resources/ticketbooking.jpg";
import cancellogo from "../../src/resources/cancelbooking.png";
import checklogo from "../../src/resources/checkbooking.png";
import notificationlogo from "../../src/resources/newnoti.png";
import logo from "../../src/resources/userlogo.png";
import signOutIcon from "../../src/resources/log-out.svg";
import style from "../../src/style.module.css/admin.style.css";

export default class LoggedInUser extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="admin-logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <h2>{localStorage.getItem("curUser")}</h2>
          </a>

          <div className={`collapse  navbar-collapse ${style.navIcons} `}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <li className="navbar-item">
                <Link to="/booking" className="nav-link">
                  <img src={ticketlogo}
                  width="25"
                  height="25"
                  alt="users" />
                  Ticket Booking
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/checkBooking" className="nav-link">
                  <img src={checklogo} 
                    width="25"
                    height="25"
                   alt="trainListIcon" />
                  Check Booking 
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/notification" className="nav-link">
                  <img src={notificationlogo} 
                  width="25"
                  height="25"
                  alt="createTrainIcon" />
                  Notification
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/cancelTicket" className="nav-link">
                  <img src={cancellogo} 
                  width="25"
                  height="25"
                  alt="createTrainIcon" />
                  Cancel Ticket
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  <img src={signOutIcon} alt="signOutIcon" />
                  sign out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}