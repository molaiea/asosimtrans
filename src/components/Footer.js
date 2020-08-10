import React from 'react';
import tachyons from 'tachyons';
import {FaUserAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Footer = ()=>{
	return(
<footer class="tc-l bg-center cover bg-black footer flex space-between">
    <a class="link white-60 bg-transparent hover-white inline-flex items-center mt3" href="https://facebook.com" title="Facebook">
      <svg class="dib h2 w2 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
    </a>

    <h5 class='f5 white'>
COPYRIGHT © 2020 ASOSIM TRANS.</h5>
    <Link to="/admin">
	    <svg width="2rem" height="2rem" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
		</svg>
    </Link>
    
</footer>
	)
}

export default Footer;