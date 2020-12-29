import React from 'react';
import {Row, Col} from 'reactstrap'
import './About.css';
import Resume from '../../Assets/KristopherPrater.pdf'

const About = () => {
    return (
        <section id='about'>
            <h1 id='aboutTitle'>A little about me...</h1>
            <br/>
            <Row>
                <Col id='colOne' xs='12' sm='12' md='5' lg='5'>
                <p id='aboutText'>After a decade of working for the same company, in the warehouse industry, at levels varying from entry level to middle management I decided it was time for a change.  I left what I knew and embarked on a new journey in to the wide world of coding. I am a graduate of the 12-week Immersive Web Development program at Eleven Fifty Academy and recently completed the 12-week Software Development program. While completing these programs I have logged over 1000 hours of training and coding time. Outside of coding I am an avid football and race fan, and enjoy traveling with my family.</p>
                </Col>

                <Col id='colTwo' xs='6' sm='6' md='3' lg='3'>
                <img src={require('../../Assets/KrisPrater.jpg')} alt="Kris Prater" class="img-fluid"/>
                </Col>

                <Col id='colThree' xs='12' sm='12' md='4' lg='4'>
                    <ul>
                            <li>Bachelor's Degree from Indiana University</li>
                            <li>15+ years of management experience</li>
                            <li>20+ years of customer service experience</li>
                            <li>Proficient in Microsoft Office</li>
                            <li>Skilled in Javascript, React, TypeScript, CSS, HTML</li>
                            <li>Working knowledge of C#, ASP.NET, MVC 5 </li>
                    </ul>
                <div> 
                        <a id='resume' href={Resume} download="KristopherPrater.pdf">Click to download my resume!</a>
                </div>
                </Col>
            </Row>
        </section>
    );
}
export default About;