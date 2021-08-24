import ShopActionTypes from "./shop.type";
import { firestore,convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";

export const fetchCollectionsStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
});


export const fetchCollectionsSuccess = collectionsMap =>({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
});


export const FetchCollectionsFailure = errorMessage =>({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage,
});


export const fetchCollectionsStartAsync =  () =>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
         dispatch(fetchCollectionsStart());

        //returning promises while getting the req
            collectionRef.get().then(snapshot =>{
                const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
               dispatch(fetchCollectionsSuccess(collectionsMap));
            }).catch(error => dispatch(FetchCollectionsFailure(error.message)));
    }
}
