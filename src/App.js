import React from 'react';
import './App.css';
import HomePage from '../src/components/pages/homepage/homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from '../src/components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/sign-in-and-sign-out/sign-in-sign-out';
import {auth , createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/users.section';
import {connect} from 'react-redux';

class App extends React.Component{
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        });
      }
      
      setCurrentUser(userAuth);
    });
  }

  componentDidUnMount(){
    this.unsubscribeFromAuth();
  }

    render(){
      return (
        <div>
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
