import React from 'react';
import Card from './Card';
import {logo} from '../assets/logo.svg';
import tachyons from 'tachyons';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Produits extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			collections: []
		
		};
	}
componentDidMount() {
    // GET request using fetch with error handling
    fetch('https://nameless-sands-32962.herokuapp.com/')
        .then(async response => {
            const data = await response.json();

            // check for error response
            this.setState({collections: data})
            console.log(this.state.collections)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
	

	render(){
		const {collections} = this.state;
		return (
			
			<div>
			<h1 className="dim pt-5">NOS PRODUITS</h1>
			<hr className="divider grow mb-5" style={{
			    borderBottomColor: '#ea8c22',
			    borderBottomWidth: 1,
			    width: 70,
			    height: 3,
			    background: '#ea8c22',

			  }}/>
			<div className='products rows'>
				{
		
			collections.map(({id, name, ...otherItemProps})=>(
				<Link to={"/produits/"+name}>
				<Card key={id} name={name} {...otherItemProps} />
				</Link>
			))	
					
				}

			</div>
			</div>
			);
	}
}

export default Produits;