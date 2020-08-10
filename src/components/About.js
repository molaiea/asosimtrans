import React from 'react';
import tachyons from 'tachyons';
import logo from '../assets/logo.svg';
import Tilt from 'react-tilt';

const About = ()=>(

	<div  className='w-100 orange' >
		<h1 className='black dim about'>ASOSIM TRANS</h1>
		<hr className="divider grow mb-5" style={{
			    borderBottomColor: '#fff',
			    borderBottomWidth: 1,
			    width: 70,
			    height: 3,
			    background: '#fff',

			  }}/>
		<div className='aboutcontent'>
		<div className='infocont'>
		<div className='v-mid'>
		<Tilt className="Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt" options={{ max : 30 }} >
 				<div className="Tilt-inner">
 					<img src={logo} amlt='logo' />
 				</div>
			</Tilt>
		</div>
		<p className='black ml2 mr4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		</div>
		<div className='infocont'>
		<div className='v-mid'>
		<Tilt className="Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt" options={{ max : 30 }} >
 				<div className="Tilt-inner">
 					<img src={logo} amlt='logo' />
 				</div>
			</Tilt>
		</div>
		<p className='black ml2 mr4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		</div>
		<div className='infocont'>
		<div className='v-mid'>
		<Tilt className="Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt" options={{ max : 30 }} >
 				<div className="Tilt-inner">
 					<img src={logo} amlt='logo' />
 				</div>
			</Tilt>
		</div>
		<p className='black ml2 mr4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		</div>
		</div>
	</div>

);

export default About;