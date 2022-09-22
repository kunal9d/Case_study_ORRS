import { method } from "lodash";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DESTINATION, SOURCE } from "./TicketBooking";

const Ticketbook = () => {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [trainName, setTrainName] = useState('');
    const [trainID, setTrainID] = useState('');
    const [noOfTickets, setNoOfTickets] = useState('');
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    let history = useHistory();

    const host = "http://localhost:9055";
    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(trainName, source , destination , noOfTickets , date , username , trainID);
        try{
        const data = await fetch("/orders/addorder",{
        method:"POST",
         headers:{
             "content-type": "application/json",
         },
        body: JSON.stringify({
            trainId:trainID,
            trainName:trainName,
            quantity:noOfTickets,
            userName:username,
            startStation:source,
            endStation:destination,
            date:date,
            email:email
        })
    })
    const res = await data.json();
    localStorage.setItem("ticketId",res.id)
    if (!!localStorage.getItem("ticketId") && localStorage.getItem("ticketId")===res.id) {
      sessionStorage.setItem("SOURCE",res.startStation);
      sessionStorage.setItem("DESTINATION",res.endStation);
      sessionStorage.setItem("NOOFTICKETS",res.quantity);
      sessionStorage.setItem("date",res.date);
      sessionStorage.setItem("email",res.email);
      history.push("/payment");
    }
    else{
      alert("some thing went wrong ... ")
      history.push("/booking")
    }
}

catch(error){
  console.log(error);
}}
  return (
    <div>
      <div style={{ backgroundColor: "transparent" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <strong style={{ color: "black",fontWeight:"bold" }}>
                  {" "}
                  Reservation Form{" "}
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "black",fontWeight:"bold" }}
                  onSubmit={handleSubmit}
                >
                  <label> From : </label>
                  <select
                    class="browser-default custom-select mb-4"
                    id="soList"
                    onChange={(e) => setSource(e.target.value)}
                    value={source}
                  >
                    <option value="" disabled selected>
                      Select Source!!
                    </option>
                    <option value="PUNE"> Pune </option>
                    <option value="MUMBAI"> Mumbai </option>
                    <option value="DELHI"> Delhi </option>
                    <option value="BANGLORE"> Banglore </option>
                    <option value="KANPUR"> KANPUR </option>
                    <option value="CHENNAI"> Chennai </option>
                    <option value="HYDERABAD"> Hyderabad </option>
                    <option value="LUCKNOW"> Lucknow </option>
                    <option value="PRAYAGRAJ"> Prayagraj </option>
                  </select>
                  <label> To : </label>
                  <select
                    class="browser-default custom-select mb-4"
                    id="deList" 

                    onChange={(e) => setDestination(e.target.value)}
                    value={destination}
                  >
                    <option value="" disabled selected>
                      Select Destination!!
                    </option>
                    <option value="PUNE"> Pune </option>
                    <option value="MUMBAI"> Mumbai </option>
                    <option value="DELHI"> Delhi </option>
                    <option value="BANGLORE"> Banglore </option>
                    <option value="KANPUR"> KANPUR </option>
                    <option value="CHENNAI"> Chennai </option>
                    <option value="HYDERABAD"> Hyderabad </option>
                    <option value="LUCKNOW"> Lucknow </option>
                    <option value="PRAYAGRAJ"> Prayagraj </option>
                  </select>

                  <label>Train Name </label>
                  <input
                    type="text"
                    placeholder="Enter Train Name here!!"
                    className="form-control mb-4"
                    id="tickets"
                    required
                    onChange={(e)=>{setTrainName(e.target.value)}}
                    value={trainName}
                  />
                  <label> Train Id </label>
                  <input
                    type="text"
                    placeholder="Enter Triain Id here!!"
                    className="form-control mb-4"
                    id="tickets"
                    required
                    onChange={(e)=>{setTrainID(e.target.value)}}
                    value={trainID}
                  />
                  <label> Username </label>
                  <input
                    type="text"
                    placeholder="Enter username here!!"
                    className="form-control mb-4"
                    id="tickets"
                    required
                    onChange={(e)=>{setUsername(e.target.value)}}
                    value={username}
                  />
                  <label> No of Tickets : </label>
                  <input
                    type="text"
                    placeholder="Enter number of tickets here!!"
                    className="form-control mb-4"
                    id="tickets"
                    required
                    onChange={(e)=>{setNoOfTickets(e.target.value)}}
                    value={noOfTickets}

                  />
                  <label> email </label>
                  <input
                    type="email"
                    placeholder="Enter your email id here!!"
                    className="form-control mb-4"
                    id="tickets"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={email}

                  />

                  <p>Select Date</p>

                  <input type="date" required  onChange={(e)=>{setDate(e.target.value)}}
                    value={date} />

                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    Proceed To Pay!!
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Ticketbook;
