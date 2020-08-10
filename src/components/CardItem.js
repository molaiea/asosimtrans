import React from 'react';
import tachyons from 'tachyons';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import CollectionProds from '../CollectionProds';



const CardItem = ({id, name, price, imageurl, description})=>(
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center grow">
  <img src={imageurl} class="db w-100 br2 br--top h5" alt="Photo"/>
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0 mr2">{name}</h1>
      </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">{price}</h2>
      </div>
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      {description}
    </p>
  </div>
</article>

);
export default CardItem;