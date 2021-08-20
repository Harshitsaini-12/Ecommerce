import React from 'react';
import './preview.scss';
import CollectionItem from '../../components/collection-tem/collection-item';


const CollectionPreview = ({title,items}) =>(
  <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
      {/* map onto the items array */}
        {
          items
          .filter((item,idx)=> idx < 4)
          .map((item)=>(
             <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
  </div>
)


export default CollectionPreview;