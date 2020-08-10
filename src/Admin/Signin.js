import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/logo.svg';


class Signin extends React.Component{

	constructor(props){
		super(props);
		this.state={
			email: '',
			password: '',
			route: ''
		}
	}


	onEmailChange=(e)=>{
		this.setState({
			email: e.target.value
		})
		console.log(this.state.email)
	}
	onPassChange=(e)=>{
		this.setState({
			password: e.target.value
		})
		console.log(this.state.password)
	}

	handleClick = ()=>{
		const {onRouteChange, history} = this.props;
		fetch('https://nameless-sands-32962.herokuapp.com/login', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				pass: this.state.password
			})
		})
        .then( response => {
        	const promise = response.json();

        	promise.then(result=>{
        		if(result.response){
        			
        			history.push("/admin");
        			onRouteChange("admin");
        		}
        		else{
        			alert("Email ou Mot de passe incorrecte")
        		}
        	})
            

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
	}

	render(){
		
		return(
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center mv7 ">
		<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		    <div className="logoadmin">
		    <img src={logo} />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange={this.onEmailChange} 
		        className="pa2 input-reset ba hover-bg-black hover-white w-100" 
		        type="email" name="email-address"  id="email-address"
		        placeholder="Addresse email"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange={this.onPassChange} 
		        className="b pa2 input-reset ba hover-bg-black hover-white w-100" 
		        type="password" name="password"  id="password"
		        placeholder="Mot de passe"/>
		      </div>
		    </fieldset>
		    <div className="center">
		      <div 
		      onClick={this.handleClick}
		      className="b ph3 pv2 input-reset mt-4 b--black bg-dark-blue grow pointer f6 dib p-2 br4 w-50 " 
		      > <span className="white f4">CONNEXION </span></div>
		    </div>
		    
		  </form>
		</main>
		</article>
		)
	}
}

export default withRouter(Signin);