import React, { Component } from 'react'; 
import logoCumplo from './../../logoCumplo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navigation.css'

class Navigation extends React.Component {
	render() {
		return (
			<Navbar className="containerNav">
  			<Navbar.Header>
   			 <Navbar.Brand>
      		<a href="#home"><img className='logo' src={logoCumplo}/></a>
    		 </Navbar.Brand>
  			</Navbar.Header>
  		<Nav>
    		<NavItem eventKey={1} href="#uf">
      		UF
    		</NavItem>
    		<NavItem eventKey={2} href="#dolar">
      		DOLAR
    		</NavItem>
	    	<NavItem eventKey={3} href="#grafico">
      		GRAFICO
    		</NavItem>
  		</Nav>
		</Navbar>
		)
  }
}



export default Navigation;