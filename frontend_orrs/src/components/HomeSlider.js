import React, { Component } from "react";
import trainicon from "../resources/trainicon.png";
import {Card, Carousel, CardDeck, Jumbotron} from 'react-bootstrap'


export default class HomeSlider extends Component {
  render() {
    return (
<div>
<div >
                <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "50px",marginLeft: "20px", marginRight:"20px"}}>
                    <h3><strong>Welcome to Online Railway Reservation System</strong></h3>
                    <p className="text-white">
                        Find Perfect train for the Perfect Destinations!
                    </p>
                </Jumbotron>
            </div>
<div className="container">
  
<CardDeck style={{marginTop : '20px'}}>
 <Card>
     <Card.Header className="text-center text-white" style={{backgroundColor : '#490808', fontSize : '18px'}}>
         <strong>GALLERY</strong>
     </Card.Header>
     <Card.Body>
         <Carousel style={{width : "100%"}}>
             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/2365430/pexels-photo-2365430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="First slide"
                 />
                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/2475301/pexels-photo-2475301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="Second slide"
                 />

                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/5982046/pexels-photo-5982046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="Third slide"
                 />

                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/2928780/pexels-photo-2928780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="Third slide"
                 />

                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="Third slide"
                 />

                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100"
                 src="https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="550px"
                 alt="Third slide"
                 />

                 <Carousel.Caption>
                 <h3>Our Trains</h3>
                 <p>One of the most luxurious trians.</p>
                 </Carousel.Caption>
             </Carousel.Item>

         </Carousel>    
     </Card.Body>
     <Card.Footer>
         <small className="text-muted"><i>Online Railway Reservation System welcomes you!</i></small>
     </Card.Footer>
 </Card>

 <Card bg="dark">
     <Card.Header className="text-center text-white" style={{backgroundColor : '#490808', fontSize : '18px'}}>
         <strong>FUTURE PLANS & UPDATES!</strong>
     </Card.Header>

     <Card.Body>
         <Card bg="light" className="text-success" style={{marginTop : '20px', width:'470px'}}>
             <Card.Body>
                <strong>Special Discounts and Exclusive offers!</strong> 
             </Card.Body>
         </Card>

         <Card bg="light" className="text-danger" style={{marginTop : '20px', width:'470px'}}>
             <Card.Body>
                <strong>New Trains with uniques features and facilities!</strong> 
             </Card.Body>
         </Card>

         <Card bg="light" className="text-success" style={{marginTop : '20px', width:'470px'}}>
             <Card.Body>
                <strong>Proper measures and safety for the pandemic!</strong> 
             </Card.Body>
         </Card>

         <Card bg="light" className="text-danger" style={{marginTop : '20px', width:'470px'}}>
             <Card.Body>
                 <strong>Holiday Packages for your vacations!</strong>
             </Card.Body>
         </Card>

         <Card bg="light" className="text-success" style={{marginTop : '20px', width:'470px'}}>
             <Card.Body>
                 <strong>Separate quotas for differently-abled Passengers!</strong>
             </Card.Body>
         </Card>
     </Card.Body>

     <Card.Footer>
         <small className="text-muted"><i>Online Railway Reservation System welcomes you!</i></small>
     </Card.Footer>

 </Card>
</CardDeck>
</div>
<CardDeck style={{marginTop : '20px'}}>
                        <Card>
                                 <Card.Footer>
                                <small className="text-muted"><i>Online Railway Reservation System welcomes you!<img src={trainicon} width="40" /></i></small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>


</div>);}}