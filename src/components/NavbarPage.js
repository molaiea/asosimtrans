import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import Logo from './Logo';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  window.addEventListener('scroll', function () {
            let nav = document.querySelector('nav');
            let sect = document.querySelectorAll('.navItem');
            
            let windowPosition = window.scrollY > 50;
            console.log(windowPosition)
            if(nav){
              nav.classList.toggle('scrolling-active', windowPosition);
            }
            if(sect){

              for(let i=0; i<sect.length; i++){
              sect[i].classList.toggle('ascroll', windowPosition);
            }  
            }
            
            
        })

  return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <Logo />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            
            <MDBNavItem>
            <a href="#about" className="navItem">
              Qui sommes-nous?
            </a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="#products" className="navItem">
              Produits
            </a>
            </MDBNavItem>
            <MDBNavItem>
            <a href="#contact" className="navItem">
              Contactez-nous
            </a>
            </MDBNavItem>
            
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default NavbarPage;