import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteIcon from "../../src/resources/trash-2 (1).svg";
import trainicon from "../resources/trainicon.png";
import {Card, Carousel, CardDeck, Jumbotron} from 'react-bootstrap';


const Train = props => (
  <tr>
    <td> {props.train.trainid} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.startStation} </td>
    <td> {props.train.endStation} </td>
    <td> {props.train.id} </td>
    <td> {props.train.quantity} </td>
    <td> {props.train.email} </td>
    <td> {props.train.date} </td>
    </tr>
  
  
);
class Ticketcheck extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9055/orders/getorderbyname/"+localStorage.getItem("curUser"))
      .then(response => {
        console.log(response.data);
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <h3> Trains </h3>
        <table className="table table-striped" style={{backgroundColor:'white', marginTop: 20 }}>
          <thead>
            <tr>
              <th> TrainID </th>
              <th> Train Name </th>
              <th> Source </th>
              <th> Destination </th>
              <th> ticket id </th>
              <th> No of tickets </th>
              <th> Email </th>
              <th> Date </th>
            </tr>
          </thead>
          <tbody>{this.trainList()}</tbody>
        </table>
        <CardDeck style={{marginTop : '20px'}}>
                        <Card>
                                 <Card.Footer>
                                <small className="text-muted"><i>Online Railway Reservation System welcomes you!<img src={trainicon} width="40" /></i></small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
      </div>
    );
  }
}

export default Ticketcheck;

