import React from 'react'
import { Card, CardDeck, Jumbotron } from 'react-bootstrap'
import trainicon from "../resources/trainicon.png";
function About() {
    return (
        <div>
            <div className="container">
                <Jumbotron className="text-center bg-dark text-warning jumbotron" style={{marginTop : "20px"}}>
                    <h2><strong>ABOUT</strong></h2>
                    <p className="text-white">
                        A little insight on this application!
                    </p>
                </Jumbotron>

                

                <CardDeck style={{width  :'90%', marginLeft : '60px'}}>
                    <Card>
                        <Card.Header>
                            <h5><strong>Features</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Darjeeling%20Himalayan%20Railways/3.jpg" height="300px"/>
                        
                        <Card.Body>
                            <ul>
                                <li>Become a Member and Login</li>
                                <li>View the various trains and their available seats</li>
                                <li>Check for available trains</li>
                                <li>Fill in your details and get the ticket</li>
                                <li>Change of plans? No worries! Cancel tickets at any time!</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><i>Online Railway Reservation System welcomes you!</i></small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                        <h5><strong>Developer's Note</strong></h5>
                        </Card.Header>
                        <Card.Img variant="top" src="https://www.irctctourism.com/gallery/assets/images/gallery/HILL%20RAILWAYS/Matheran%20Railway/4.jpg" height="300px"/>
                        <Card.Body>
                            <ul>
                                <li>Developed by <b>Kunal Dixit :)</b></li>
                                <li>It is an Online Railway Reservation Sytem</li>
                                <li>Developed as a part of Java Full-Stack Case-Study Implementation</li>
                                <li>Future improvements and updates will be made</li>
                                <li>Contact me via email : <a href='mailto:kunaldixit8r@gmail.com'>kunaldixit8r@gmail.com</a></li>
                            </ul>
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
        </div>
    )
}

export default About
