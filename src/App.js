import React from 'react';
import './App.css';
import HomePage from '../src/components/pages/homepage/homepage';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from '../src/components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/sign-in-and-sign-out/sign-in-sign-out';
import {auth , createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/users.section';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './components/pages/checkout/checkout';

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

  componentDidUnmount(){
    this.unsubscribeFromAuth();
  }

    render(){
      return (
        <div>
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ?
            (<Redirect to='/'/>):(<SignInAndSignUpPage/>)
             } />
          </Switch>
        </div>
      );
    }
}

const mapStateToProps = createStructuredSelector({
   currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
