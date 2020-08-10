import React from 'react';
import tachyons from 'tachyons';
import logo from './admin-ui.png';
const Logo = () => {
	return(
 				<div className="logo f3">
 					<a href=""><img src={logo} alt='admin' className="adminimg"/></a>
 				</div>

	)
}
export default Logo;