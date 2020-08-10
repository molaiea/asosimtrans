import React from 'react';
import Item from './Item';
import {Link} from 'react-router-dom';
import tachyons from 'tachyons';
import Popup from "reactjs-popup";
import Header from './Header';
import Footer from './Footer';

class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			collections: [],
			name: '',
			url: ''		}
	}

	componentDidMount() {
    // GET request using fetch with error handling
    fetch('https://nameless-sands-32962.herokuapp.com/')
        .then(async response => {
            const data = await response.json();
            this.setState({collections: data})
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

	
	updateDb = (id, name, newname, imageurl, oldurl)=>{
			fetch('https://nameless-sands-32962.herokuapp.com/admin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: id,
				name: name,
				newname: newname,
				url: oldurl,
				newurl: imageurl
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

	deleteDb = (name)=>{
		fetch('https://nameless-sands-32962.herokuapp.com/admin/del', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name
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

	onNameChange=(e)=>{
		this.setState({name: e.target.value})
	}

	onUrlChange=(e)=>{
		this.setState({url: e.target.value})
	}

	addCat=(name, url)=>{
		fetch('https://nameless-sands-32962.herokuapp.com/admin/add', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				url: url
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
		const {collections} = this.state;
		const {onRouteChange} = this.props

		return(
			<div className="admin">
			<Header onRouteChange={onRouteChange}/>
			<br/>
			<br/>
				<div className='rows mt-5'>
				{
		
			collections.map(({id, name, imageurl})=>(
				<div className="admincont">
				<Link to={"/admin/"+name}>
				<Item id={id} name={name} imageurl={imageurl} />
				</Link>
				<Popup
				    trigger={
				    	<div className="tc w-100">
				    	<button className="button ttc mb4 ba br3 p-2 b--transparent grow "> éditer </button>
				    	</div>}
				    modal
				    closeOnDocumentClick
				  >
				  {
				  	close=>(
				  		<div className="p-5 tc fill">
				  		<h1 className="f3 lh-title ttc sans-serif p-4">éditer la catégorie</h1>
				    <div className=" w-100 tc">
					    <label for="name" className="f4 b db mb2 serif">Nom de la catégorie </label>
					    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le nouveau nom"
					    onChange={this.onNameChange}/>
					    
				  	</div>
				  	<div className="">
					    <label for="name" className="f4 b db mb2 serif ">Image </label>
					    <input id="name" className="input-reset ba mb4 b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer l'addresse de la nouvelle image"
					    onChange={this.onUrlChange}/>
					    
				  	</div>
				  	
				  	<button
			            className="button p-2 m-2  ba br3 p-2  grow"
			            onClick={() => {
			              close();
			            }}
		         	>
		            Annuler
		          	</button>
		          	<button
			            className="button p-2 m-2 ba br3 p-2  grow"
			            onClick={() => {
			              this.updateDb(id, name, this.state.name, this.state.url, imageurl)
			              close();
			            }}
		         	>
		            Confirmer
		          	</button>
		          	<button
			            className="button p-2 m-2 ba br3 p-2 grow"
			            onClick={() => {
			              this.deleteDb(name)
			              close();
			            }}
		         	>
		            Supprimer la catégorie
		          	</button>
		          	</div>
				  	)
				  }
				  	
			  	</Popup>
				</div>
			))	
					
				}
				<Popup
				    trigger={<img className="db ba b--black-10 h5 w6 dim pointer ml4"
			       alt="Ajouter une catégorie"
			       src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9e%2FPlus_symbol.svg%2F500px-Plus_symbol.svg.png&f=1&nofb=1"
			  />
}
				    modal
				    closeOnDocumentClick
				  >
				  {
				  	close=>(
				  		<div className="p-5 tc">
				  		<h1 className="f1 lh-title ttc sans-serif p-4">ajouter une catégorie</h1>
				    <div className="">
					    <label for="name" className="f4 b db mb2 serif">Nom de la catégorie </label>
					    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer le nom de la catégorie"
					    onChange={this.onNameChange}/>
					    
				  	</div>
				  	<div className="">
					    <label for="name" className="f4 b db mb2 serif">Image </label>
					    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db mb4 w-100" type="text" aria-describedby="name-desc" 
					    placeholder="Entrer l'addresse de l'image de la catégorie"
					    onChange={this.onUrlChange}/>
					    
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
			            	const name = this.state.name;
			            	const url = this.state.url;
			            	if(name){
			            		this.addCat(name, url);
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
			<Footer/>
			</div>
		)
	}
}

export default Admin;