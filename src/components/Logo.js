import React from 'react';
import tachyons from 'tachyons';
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
const Logo = () => {
	return(
 				<div className="logo f1">
 					<a href="#home"><img src={logo} alt='logo' /></a>
 				</div>

	)
}
export default Logo;