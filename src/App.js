import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Produits from './components/Produits.js';
import ContactUs from './components/ContactUs.js';
import NavbarPage from './components/NavbarPage.js';
import CollectionProds from './CollectionProds';
import Footer from './components/Footer.js';
import Logo from './components/Logo';
import logo from './assets/logo.svg';
import Admin from './Admin/Admin';
import Signin from './Admin/Signin';
import Collectionp from './Admin/Collectionp'
import './App.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {FaLongArrowAltLeft} from 'react-icons/fa'
import ErrorPage from './ErrorPage';
import {FaUserAlt} from 'react-icons/fa';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }


componentDidMount() {

    if(!window.location.href.includes('admin')){
      this.setState({
        route: 'home'
      })
    }


    else if(localStorage.getItem('localRoute') === 'admin'){
      this.setState({route: 'admin'})
    }

    else if(localStorage.getItem('localRoute') === 'home'){
      this.setState({route: 'home'})
    }


}
  
  onRouteChange=(route)=>{
    this.setState({
      route: route
    })
    localStorage.setItem('localRoute', route);
  }

  render(){
    const {route} = this.state;
    return (
      route==='home'?
      <Router>
      <div className="App">
      
      <Switch>
      <Route exact path="/" exact strict render={
        ()=>{
          return(
            <div className="App">
            <NavbarPage />
            <section id='home'>
            <Header />
            </section>
            <section id='about'>
            <About />
            </section>
            <section id='products'>
            <Produits />
            </section>
            <section id='contact'>
            <ContactUs />
            </section>
            <footer className=" bg-black foot tc">
    
    <h5 className='f5 white pt3'>
COPYRIGHT © 2020 ASOSIM TRANS.</h5>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center mt2 ml2" href="https://facebook.com" title="Facebook">
      <svg className="dib h2 w2 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
    </a>
    

</footer>
          </div>
          )
        }
      }/>
      <Route exact path="/produits/:name" exact strict render={
        ({match})=>{
          return(
            <div>
            <Link to="/"><img src={logo} /></Link>
            <CollectionProds name={match.params.name} />
            </div>)
        }
      }/>
      
      <Route exact path='/login' exact strict render={
        ({match})=>{
          return(
            <Signin onRouteChange={this.onRouteChange} />)
        }
      } />
      <Route component={ErrorPage}/>
      </Switch>
      </div>

    </Router>

    :
    <Router>
    <Switch>

      <Route exact path='/login' exact strict render={
        ({match})=>{
          return(
            <Signin onRouteChange={this.onRouteChange} />)
        }
      } />
    
      <Route exact path='/admin' exact strict render={
        ({match})=>{
          return(
            <Admin onRouteChange={this.onRouteChange} />)
        }
      } />
      <Route exact path="/admin/:name" exact strict render={
        ({match})=>{
          return(
            <Collectionp catname={match.params.name} />
            

          )
        }
      }/>
      <Route component={ErrorPage}/>
      </Switch>
      </Router>



  );
  }
  
}

export default App;
