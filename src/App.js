import React from 'react';
import SiteNavbar from './Components/Navbar/SiteNavbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <SiteNavbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
export default App;