import React from 'react';
import tachyons from 'tachyons';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import CollectionProds from '../CollectionProds';



const Card = ({id, name, price, imageurl})=>(

      <article className="contcard br2 ba grow dark-gray b--black-10 mv3 mw5 center">
        <img src={imageurl} className="image db w-100 br2 br--top" alt="" />
        <div class="middle">
          <div style={{ textDecoration: 'none' }}
          class="text"  >Voir la collection</div>
        </div>
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0 ttc">{name.replace('_', ' ').replace('4', "'")}</h1>
            </div>
            
          </div>

        </div>
      </article>
);
export default Card;


