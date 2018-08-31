import React, { Component } from 'react'; 
import logoCumplo from './../../logoCumplo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import UfExt from './../Uf/UfExt';
import DolarExt from './../Dolar/DolarExt';
import './Navigation.css'

class Navigation extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect>
  			<Navbar.Header>
   			 <Navbar.Brand>
      		<a href="#home"><img className='logo' src={logoCumplo}/></a>
    		 </Navbar.Brand>
         <Navbar.Toggle />
  			</Navbar.Header>
        <Navbar.Collapse>
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
      </Navbar.Collapse>
		</Navbar>
		)
  }
}



export default Navigation;