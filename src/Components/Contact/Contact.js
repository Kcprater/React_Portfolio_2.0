import React from 'react';
import {Container, Row, Col, Form, Label, Input, Button} from 'reactstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
                <Container>
                <br/>
                <br/>
                <h1 id="contactTitle">Contact Me</h1>
                <Row>
                    <Col>
                        <Form className="contactMe" action="https://formspree.io/f/xdoppyej" method="POST">
                            <div class="control-group">
                                <div class="form-group">
                                    <Label>Name</Label>
                                    <Input type="text" className="form-control" placeholder="Your Name" id="name" required
                                        data-validation-required-message="Please enter your name" name="name"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group">
                                    <Label>Email Address</Label>
                                    <Input type="email" className="form-control" placeholder="Your Email" id="email" required
                                        data-validation-required-message="Please enter your email" name="_replyto"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group">
                                    <textarea className="form-control" rows="7" placeholder="Your Message" id="message" required
                                        data-validation-required-message="Please leave a message" name="message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="success"></div>
                                <Button id="sendMessage" type="submit" class="btn btn-lg btn-light" color="info" size="lg">
                                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
                <Container id="logoContainer">
                    <Row className="socialMedia justify-content-md-center">
                        <Col xs='2' md="1">
                            <div>
                                <a href="https://www.linkedin.com/in/kristopher-c-prater/">
                                <img src={require('../../Assets/linkedin.png')} className="contactLogo"/>
                                </a>
                            </div>
                        </Col>

                        <Col xs ='2' md="1">
                            <div>
                                <a href="https://github.com/Kcprater">
                                <img src={require('../../Assets/githubLogo.jpg')} className="contactLogo" />
                                </a>
                            </div>
                        </Col>

                        <Col xs='2' md="1">
                            <div>
                                <a href="https://codepen.io/kcprater">
                                <img src={require('../../Assets/codepenLogo.jpg')} className="contactLogo"/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br/>
        </div>  
    );
}
export default Contact;