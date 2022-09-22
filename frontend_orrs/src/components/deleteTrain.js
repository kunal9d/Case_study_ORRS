import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavigationBar from "../components/adminNavigationBar";

export default class deleteTrain extends Component {
  state = {
    trainid:"",
  };

  handleSubmit = async (e) => {
  
    e.preventDefault();

      const response = await fetch(`/trains/delete/`+this.state.trainid, {
        method: "DELETE",

      });

      console.log(response);
      alert("train deleted .... ");
      const json = await response.json();
  };

  handleChange (e) {
    console.log('handle change called');
    this.setState({trainid : e.target.value});
  }

  render() {
    return (
      <div>
        <AdminNavigationBar />
                <div className="d-flex justify-content-center" style={{width:"25%", marginLeft:"40%"}}>
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Delete Train</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Id</label>
                      <input
                        type="text"
                        className="form-control"
                        id="trainid"
                        placeholder="Enter train id here!!"
                        onChange={(e) => {this.handleChange(e)}}
                        value={this.state.trainid}
                        required
                      />
                    </div>
                    
                <br />
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg my-2 btn-block"
                    >
                      Delete Train
                    </button>
                    
                    <p>Add Train?<Link to="/addTrain"> Click Here</Link></p>
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
