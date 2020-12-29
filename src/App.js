import React from 'react';
import SiteNavbar from './Components/Navbar/SiteNavbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SiteNavbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;