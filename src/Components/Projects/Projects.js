import React from "react";
import './Projects.css'
import {Row, Col} from 'reactstrap';
import {Card, CardImg, CardHeader, CardText, CardBody, CardTitle} from 'reactstrap';

const Projects = () => {
  return (
      <div id="projects">
          <h1 id="projectTitle">Hello World! - Check out some of my projects.</h1>
          <br></br>
        <Row>
            <Col sm="6" md='6' lg='3' xl='3'>
                <Card className="projectCard">
                    <CardHeader>Where it all began... 1st CSS creature attempt!</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://codepen.io/kcprater/pen/yLyrPdg">
                    <CardImg img src={require('../../Assets/cssMickey.png')} alt="CSS-Mickey-Mouse" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>CSS/HTML Mickey Mouse</CardTitle>
                        <CardText>I created this "creature" while attending Eleven Fifty Academy's Web Development Bootcamp. This project reminds me of the first time I experienced frustration AND joy while coding!</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>2nd CSS Creature</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://codepen.io/kcprater/pen/GRomKLd">
                    <CardImg img src={require('../../Assets/cssMario.png')} alt="CSS-Super-Mario" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>CSS/HTML 8-Bit Super Mario</CardTitle>
                        <CardText>This is my second creature created using only CSS/HTML. It was also created while attending the Software Development Bootcamp at Eleven Fifty Academy.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>Static Recreation of Hulu's Homepage</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://kcprater.github.io/StaticLayoutProject">
                    <CardImg img src={require(('../../Assets/huluStatic.png'))} alt="StaticHUluHomepage" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>1st Static Layout</CardTitle>
                        <CardText>A static version of Hulu.com. The layout was created using Flexbox and no other outside libraries.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>Static Homepage layout for a 'furniture store'</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://kcprater.github.io/StaticStoreFront">
                    <CardImg img src={require('../../Assets/efaStatic.png')} alt="FakeFurnitureStore" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>2nd Static Layout</CardTitle>
                        <CardText>For this project I was tasked with designing and building a homepage for a company. After deciding what kind of store I was going to build a page for I created a wireframe and built the page around my designs.</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
            <br/>
            <br/>
        <Row>
            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>Harry Potter API</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://kcprater.github.io/HarryPotterAPI">
                    <CardImg img src={require('../../Assets/hpAPI.png')} alt="SortingHat" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>Working with an API</CardTitle>
                        <CardText>This project was built to reach out to the Harry Potter API(potterapi.com) and decide what House at Hogwarts School of Magic the person should be assigned to after entering their name. Once a House is picked for the user, information about the house and other members is displayed. This app was built using Javascript, HTML, and CSS.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>Universal API</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://kp-universalclient.herokuapp.com">
                    <CardImg img src={require('../../Assets/universalAPI.png')} alt="UniversalProject" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>Fullstack Application with CRUD</CardTitle>
                        <CardText>A fullstack app that utilizes React, Node, Express and PostgreSQL. I enjoy riding rollercoasts and my favorite park is definitely Universal Studios Orlando. I built this app to allow the user to track information about their vist and rate the rides at the park.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>Pawcious Memories</CardHeader>
                    <a style={{cursor: 'pointer'}} href="http://pawciousmemories-client.herokuapp.com">
                    <CardImg img src={require('../../Assets/redBadgeFinal.png')} alt="Pawcious Memories" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>Pawcious Memories</CardTitle>
                        <CardText>React Application and Node server built while working in a team (remotely). This project utilizes PostgreSQL, Express, Node and React, as well as using a couple libraries to help with design and layout. This application was built to allow the user to add information about their pets as well as add photos and memories.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm="6" md='6' lg='3' xl='3'>
                <Card>
                    <CardHeader>A Helping Hand</CardHeader>
                    <a style={{cursor: 'pointer'}} href="https://ahelpinghandwebmvc.azurewebsites.net/">
                    <CardImg img src={require('../../Assets/HelpingHand.png')} alt="A Helping Hand" className="projectImg"/>
                    </a>
                    <CardBody>
                        <CardTitle>ASP.NET MVC 5</CardTitle>
                        <CardText>.Net Framework MVC 5 Web Application using n-tier architecture deployed to Azure. This application was built to connect industry skilled professionals to people seeking their services.</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
    ); 
}
export default Projects;