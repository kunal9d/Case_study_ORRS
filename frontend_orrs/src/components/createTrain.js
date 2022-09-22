import React, { Component } from "react";
import AdminNavigationBar from "../components/adminNavigationBar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class CreateTrain extends Component {
  state = {
    trainid: "",
    trainName: "",
    startStation: "",
    endStation: "",
    date: "",
    seats: "",
    isTrainCreated: false,
  };

  handleTrainid = (event) => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainid: value.toUpperCase() });
    }
  };

  handleTrainName = (event) => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handlestartStation = (event) => {
    const { value } = event.target;
    this.setState({ startStation: value.toUpperCase() });
  };

  handleendStation = (event) => {
    const { value } = event.target;
    this.setState({ endStation: value.toUpperCase() });
  };
  handledate = (event) => {
    const { value } = event.target;
    this.setState({ date: value });
  };
  handleseats = (event) => {
    const { value } = event.target;
    this.setState({ seats: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    try {
      
      const newTrain = {
        trainid: this.state.trainid,
      trainName: this.state.trainName,
      startStation: this.state.startStation,
      endStation: this.state.endStation,
      seats: this.state.seats,
      date: this.state.date,
    };
    console.log(newTrain);
    axios
    .post("/trains/addtrain", newTrain,{headers: {
        "content-type": "application/json",
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        "accept": "application/json",        
      },})
      .then((response) => console.log(response))
      .catch((error) => error.message);
      
      window.alert("Train created successfully");
      this.setState({
        trainid: "",
        trainName: "",
        startStation: "",
        endStation: "",
        date:"",
        seats:"",
        
        isTrainCreated: true,
      });
    } catch (error) {
      console.log(error);
    }
    };
    render() {
      if (this.state.isTrainCreated) {
      return <Redirect to="/trainlist" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create Train</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainid"
                        placeholder="Enter train id here"
                        onChange={this.handleTrainid}
                        value={this.state.trainid}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        placeholder="Enter train name here"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handlestartStation}
                        placeholder="Enter source here"
                        value={this.state.startStation}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Destination</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleendStation}
                        placeholder="Enter destination here"
                        value={this.state.endStation}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="inputState">Date</label>
                      <input
                        id="date"
                        className="form-control"
                        onChange={this.handledate}
                        placeholder="Enter date here"
                        value={this.state.date}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="inputState">Seats</label>
                      <input
                        id="seats"
                        className="form-control"
                        onChange={this.handleseats}
                        placeholder="Enter number of seats here"
                        value={this.state.seats}
                        required
                      />
                    </div>
                  </div>
                  <br />

                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Create Train
                    </button>

                    <p>
                      Delete Train?<Link to="/delTrain"> Click Here</Link>
                    </p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
