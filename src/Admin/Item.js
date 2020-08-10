import React from 'react';

class Item extends React.Component{


	render(){
		const {id, name, imageurl, price} = this.props;
		var nname = name.replace('_', ' ');
		nname = nname.replace("4", "'");
		return(
			<a class="db center mw5 tc black link dim"
			   title=""
			   href="">

			  <img class="db ba b--black-10 h5 w6"
			       alt={nname}
			       src={imageurl}
			       id={name.replace(" ", "_")}
			  />

			  <dl class="mt2 f6 lh-copy">
			    <dt class="clip">Title</dt>
			    <dd class="ml0 f4">{nname}</dd>

			    <dd class="ml0">{price}</dd>

			  </dl>
			</a>

		)
	}
}

export default Item;