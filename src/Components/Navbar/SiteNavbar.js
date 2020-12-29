import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import '../../Components/Navbar/SiteNavbar.css';

const SiteNavbar = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div id='navbar'>
            <Navbar color='light' light id='navbar' expand='md' fixed='top'>
                <NavbarBrand id="navLogo" href='#top'>KP</NavbarBrand> 
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink id='link' href="#about">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id='link' href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id='link' href='#contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default SiteNavbar;