import React from 'react';
import tachyons from 'tachyons';
import  Logo from './Logo'

class Header extends React.Component{


  handleClick = ()=>{
    const {onRouteChange} = this.props;
    onRouteChange('home');
  }
	render(){
    
		return(
				<div class="flex justify-between bb bg-white fixed w-100 z-1 ">
  <a class=" white-70 hover-white no-underline flex items-center pa3" href="">
    <Logo />
    <h2 className="fontadmin pl4 pt2 dim b black">My DASHBOARD </h2>
  </a>
  <div class="flex-grow pa3 flex items-center">
    <a class="f4 dib grow black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="/"
    onClick={this.handleClick}>Déconnexion</a>
  </div>
</div>

		)
	}

}


export default Header;