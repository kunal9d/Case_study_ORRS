import React, { Component } from "react";
import LoggedInUser from "./LoggedInUser";
// import AdminNavigationBar from "../components/adminNavigationBar";

export default class cancelTicket extends Component {
  state = {
    id:"",
  };

  handleSubmit = async (e) => {
  
    e.preventDefault();
      const response = await fetch(`/orders/del/`+this.state.id, {
        method: "DELETE",

      });

      console.log(response);
      alert("Reservation Canceled .... Your money soon be debited to your account!!");
      const json = await response.json();
  };

  handleChange (e) {
    console.log('handle change called');
    this.setState({id : e.target.value});
  }

  render() {
    return (
      <div>
        <LoggedInUser />
                <div className="d-flex justify-content-center" style={{width:"25%", marginLeft:"40%"}}>
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Cancel Reservation</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Ticket Id</label>
                      <input
                        type="text"
                        className="form-control"
                        id="trainid"
                        placeholder="Enter ticket id here!!"
                        onChange={(e) => {this.handleChange(e)}}
                        value={this.state.id}
                        required
                      />
                    </div>
                    
                <br />
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg my-2 btn-block"
                    >
                     Cancel Reservation
                    </button>
                    
                    {/* <p>Add Train?<Link to="/addTrain"> Click Here</Link></p> */}
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
