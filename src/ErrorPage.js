import React from 'react';
import {Link} from 'react-router-dom';
import error from './error.svg';
import tachyons from 'tachyons';

const ErrorPage = ()=>{
	return(
		<section className="vh-100 baskerville">
  <header className="tc ph5 lh-copy">
  	  <img src={error} alt='error' className="errorpic mt5" />
      <h2 class="tc f1-l fw1">La page que vous cherchez est introuvable!</h2>
  </header>
  <Link to="/" className="f4 no-underline black mt5 bg-animate hover-bg-black hover-black inline-flex items-center pa3 ba border-box mr4">
      <svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" >
        <title>chevronLeft icon</title>
        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
      </svg>
    <span class="pl1">Homepage</span>
  </Link>
  
</section>

	)
	
};
export default ErrorPage;