import React from 'react';
import './App.css';
import HomePage from '../src/components/pages/homepage/homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from '../src/components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/sign-in-and-sign-out/sign-in-sign-out';
import {auth , createUserProfileDocument} from './firebase/firebase.util';
import { createDocumentRegistry } from 'typescript';

class App extends React.Component{

constructor(){
  super();

  this.state={
     currentUser:null
  };
}

unsubscribeFromAuth=null;

componentDidMount(){
  this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth =>{
    
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
      })
    }
    
    this.setState({currentUser:userAuth});
  });
}

componentDidUnMount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
