import React from 'react';

import CollectionsOverviewContainer from '../../collections-overview/collections-overview-components';
import CollectionPageContainer from '../collection/collection-component';

import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStartAsync} from '../../../redux/shop/shop.actions';


class ShopPage extends React.Component{

    componentDidMount(){

     const {fetchCollectionsStartAsync}= this.props;
     fetchCollectionsStartAsync();

    //using simple call as in js

    //  fetch('https://firestore.googleapis.com/v1/projects/crown-db-55159/databases/(default)/documents/collections')
    //  .then(response => response.json())
    //  .then(collection => console.log(collection));
    }

    render(){

        const {match} = this.props;

        return(
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`}  
                component={CollectionPageContainer} />
           </div>
        )
    } 
};

const mapDispatchToProps = dispatch =>({
   fetchCollectionsStartAsync:() => dispatch(fetchCollectionsStartAsync())
});


export default connect(null,mapDispatchToProps)(ShopPage);