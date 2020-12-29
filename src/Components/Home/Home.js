import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import './Home.css';


const Home = () => {
  return (
    <div id="top">
      <Jumbotron className='jumbotron'>
        <Container fluid>
        <h1 className="name">Kris Prater</h1>
        <h4 className="position">Web & Software Developer</h4>
        </Container>
      </Jumbotron>
    </div>
  );
}
export default Home;