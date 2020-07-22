import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductsList from './Components/ProductsList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal'


class App extends React.Component {
  render(){
  return (
     <React.Fragment>
         <Navbar/>
         <Switch>
           <Route exact path='/' component={ProductsList} />
           <Route path='/details' component={Details} />
           <Route path='/cart' component={Cart} />
           <Route  component={Default} />
         </Switch>
         <Modal />
         
     </React.Fragment>
    );
  }
}

export default App;
