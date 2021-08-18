import React from 'react';
import './App.css';
import HomePage from '../src/components/pages/homepage/homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from '../src/components/pages/shop/shop';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
