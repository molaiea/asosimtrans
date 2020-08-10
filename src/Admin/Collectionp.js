import React from 'react';
import CardItem from '../components/CardItem';
import {logo} from '../assets/logo.svg';
import tachyons from 'tachyons';
import Popup from "reactjs-popup";

class Collectionp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data: [],
			name: '',
			url: '',
			price: '',
			description: ''
		}
		
	}

	componentDidMount() {
    const {catname} = this.props;
    fetch(`https://nameless-sands-32962.herokuapp.com/produits/${catname}`)
        .then(async response => {
            const collection = await response.json();

            this.setState({data: collection});
        })
        .catch(error => {
            console.error('There was an error!');
        });
}

	updateDb = (catname, id, name, price, url, desc, newname, newprice, newurl, newdesc)=>{
			
			fetch('https://nameless-sands-32962.herokuapp.com/admin/name/update', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				catname: catname,
				id: id,
				name: name,
				price: price,
				url: url,
				desc: desc,
				newname: newname,
				newprice: newprice,
				newurl: newurl,
				newdesc: newdesc
				})
		})
        .then( response => {
            
            const promise = response.json();

        	promise.then(result=>{
        		if(result.response){
        			window.location.reload();
        		}
        	
        	})

        })
        .catch(error => {
            alert('There was an error!');
        });
		
	}

	deleteProduct = (catname, id)=>{
		
		fetch('https://nameless-sands-32962.herokuapp.com/admin/delete', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				catname: catname,
				id: id
				})
		})
        .then( response => {


            const promise = response.json();

        	promise.then(result=>{
        		if(result.response){
        			window.location.reload();
        		}
        	
        	})

            
            

        })
        .catch(error => {
            alert('There was an error!');
        });
	}

	onPriceChange=(e)=>{
		this.setState({price: e.target.value})
	}	

	onDescriptionChange=(e)=>{
		this.setState({description: e.target.value})
	}

	onNameChange=(e)=>{
		this.setState({name: e.target.value})
	}

	onUrlChange=(e)=>{
		this.setState({url: e.target.value})
	}

	addProduct=(catname, name, url, price, description)=>{
		fetch('https://nameless-sands-32962.herokuapp.com/admin/name/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				catname: catname,
				name: name,
				url: url,
				price: price,
				description: description
				})
		})
        .then( response => {
  
            const promise = response.json();

        	promise.then(result=>{
        		if(result.response){
        			window.location.reload();
        		}
        	
        	})

        })
        .catch(error => {
            alert('There was an error!');
        });
	}

	render(){
		
		
		const {data} = this.state;
		const {catname} = this.props;
		return (
			<div className="prodscoll">
			
			<div className='rows'>
				{
		
			data.map(({id, name, price, imageurl, description})=>(
				<div className="tc h50 admincont">
				<CardItem key={id} name={name} price={price} imageurl={imageurl} description={description} />
				<Popup
				    trigger={<div className="tc w-100">
				    	<button className="button ttc mb4 ba br3 p-2 b--transparent grow "> éditer </button>
				    	</div>}
				    modal
				    closeOnDocumentClick
				  >
				  {
				  	close=>(
				  		<div className="p-5">
				  		<h1 class="f1 lh-title ttc sans-serif p-4">éditer le produit</h1>
				    <div class="">
					    <label for="name" class="f4 b db mb2 serif">Nom du produit </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le nouveau nom"
					    onChange={this.onNameChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Prix du produit </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le nouveau prix"
					    onChange={this.onPriceChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Image </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer l'addresse de la nouvelle image"
					    onChange={this.onUrlChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Desription </label>
					    <input id="name" class="input-reset mb4 ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer unde description du produit"
					    onChange={this.onDescriptionChange}/>
					    
				  	</div>
				  	<button
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			              close();
			            }}
		         	>
		            Annuler
		          	</button>
		          	<button
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			              this.updateDb(catname, id, name, price, imageurl, description, this.state.name, this.state.price, this.state.url, this.state.description)
			              close();
			            }}
		         	>
		            Confirmer
		          	</button>
		          	<button
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			              this.deleteProduct(catname, id)
			              close();
			            }}
		         	>
		            Supprimer le produit
		          	</button>
		          	</div>
				  	)
				  }
				  	
			  	</Popup>
			  	</div>

			))	
					
				}

				<Popup
				    trigger={<img class="db ba b--black-10 h5 w6 dim pointer ml4 mt4"
			       alt="Ajouter une catégorie"
			       src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9e%2FPlus_symbol.svg%2F500px-Plus_symbol.svg.png&f=1&nofb=1"
			  />
}
				    modal
				    closeOnDocumentClick
				  >
				  {
				  	close=>(
				  		<div className="tc">
				  		<h1 class="f1 lh-title ttc sans-serif p-4">Ajouter un produit</h1>
				    <div class="">
					    <label for="name" class="f4 b db mb2 serif">Nom du produit </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le nom du produit"
					    onChange={this.onNameChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Prix du produit </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le prix du produit"
					    onChange={this.onPriceChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Image </label>
					    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer l'addresse d'une image du produit"
					    onChange={this.onUrlChange}/>
					    
				  	</div>
				  	<div class="">
					    <label for="name" class="f4 b db mb2 serif">Desription </label>
					    <input id="name" class="input-reset ba mb4 b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer une description du produit"
					    onChange={this.onDescriptionChange}/>
					    
				  	</div>
				  	<button p-2 m-2 ba br3 p-2 grow
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			              close();
			            }}
		         	>
		            Annuler
		          	</button>
		          	<button
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			            	const name = this.state.name;
			            	const url = this.state.url;
			            	const price = this.state.price;
			            	const description = this.state.description;
			            	if(name){
			            		this.addProduct(catname, name, url, price, description);
			              		close();
			            	}
			            	else{
			            		alert("Entrez un nom!")
			            	}
			         	  
			            }}
		         	>
		            Confirmer
		          	</button>
		          	
		          	</div>
				  	)
				  }
				  	
			  	</Popup>
			
			</div>
			</div>);
	}
}

export default Collectionp;