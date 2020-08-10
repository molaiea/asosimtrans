import React from 'react';
import CardItem from './components/CardItem';
import {logo} from './assets/logo.svg';
import tachyons from 'tachyons';
import Popup from "reactjs-popup";

class CollectionProds extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data: []
		}
		
	}

	componentDidMount() {
    // GET request using fetch with error handling
    const {name} = this.props;
    fetch(`https://nameless-sands-32962.herokuapp.com/produits/${name}`)
        .then(async response => {
            const collection = await response.json();

            this.setState({data: collection});
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}


	render(){
		
		
		const {data} = this.state;
		return (
			<div className="prodscoll">
			
			<div className='rows'>
				{
		
			data.map(({id, ...otherItemProps})=>(
				<CardItem key={id} {...otherItemProps} />
			))	
					
				}
			
			</div>
			</div>);
	}
}

export default CollectionProds;