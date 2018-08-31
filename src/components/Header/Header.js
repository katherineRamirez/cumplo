import React, { Component } from 'react'; 
import imgHeader from './../../imgHeader.jpg';
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<img className='imgHeader' src={imgHeader}/>
		)
	}
}

export default Header;