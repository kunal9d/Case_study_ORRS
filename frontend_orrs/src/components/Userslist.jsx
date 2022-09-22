import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import trainicon from "../resources/trainicon.png";
import {Card, Carousel, CardDeck, Jumbotron} from 'react-bootstrap'

const User = props => (
  <tr>
    <td> {props.user.id} </td>
    <td> {props.user.userName} </td>
    <td> {props.user.gender} </td>
    <td> {props.user.phoneNumber} </td>
    </tr>
  
  
);
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { userlist: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9055/admin/displayalluser")
      .then(response => {
        this.setState({ userlist: response.data });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  userList() {
    return this.state.userlist.map(function(user, i) {
      return <User user={user} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <h3 style={{ color: '#000000', display: 'flex', justifyContent:'center', fontWeight: 'bold'}}> Users </h3>
        <table className="table table-striped" style={{backgroundColor:'white', marginTop: 20 }}>
          <thead>
            <tr>
              <th> User Id </th>
              <th> Username </th>
              <th> Gender </th>
              <th> Phone No </th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
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

export default UsersList;