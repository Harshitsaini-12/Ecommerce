import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collections/preview'
import './collections-overview.scss';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) =>(
    <div className="collections-overview">
          {
           collections.map(({id, ...otherCollectionProps}) => (
           <CollectionPreview key={id} {...otherCollectionProps}/>
           ))
       }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
});


export default connect(mapStateToProps)(CollectionsOverview);


