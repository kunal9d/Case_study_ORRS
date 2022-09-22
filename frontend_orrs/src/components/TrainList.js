import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import trainicon from "../resources/trainicon.png";
import {Card, Carousel, CardDeck, Jumbotron} from 'react-bootstrap';



const Train = props => (
  <tr>
    <td> {props.train.trainid} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.startStation} </td>
    <td> {props.train.endStation} </td>
    <td> {props.train.seats} </td>
    <td> {props.train.date} </td>
    </tr>
  
  
);
class TrainList extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9055/trains/findalltrains")
      .then(response => {
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
        <h3 style={{ color: '#000000', display: 'flex', justifyContent:'center', fontWeight: 'bold'}}> Trains </h3>
        <table className="table table-striped" style={{backgroundColor:'white', marginTop: 20 }}>
          <thead>
            <tr>
              <th> TrainID </th>
              <th> Train Name </th>
              <th> Source </th>
              <th> Destination </th>
              <th> Seats </th>
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

export default TrainList;