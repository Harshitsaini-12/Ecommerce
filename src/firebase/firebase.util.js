import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDzvyjvD-XvYNdedjE2mEcHApYcG58a9Do",
    authDomain: "crown-db-55159.firebaseapp.com",
    projectId: "crown-db-55159",
    storageBucket: "crown-db-55159.appspot.com",
    messagingSenderId: "249262379000",
    appId: "1:249262379000:web:0c95771ecbcb987d75d00d",
    measurementId: "G-D3F5TWN83W"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth,additionalData) =>{
 
    if(!userAuth)return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const collectionRef =firestore.collection('users');


    const snapShot =await userRef.get();
    const collectionSnapshot =await collectionRef.get();


     if(!snapShot.exists){
       const {displayName, email} = userAuth;
       const createdAt=new Date();
 
       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         });
       } catch (error) {
         console.log('error creating user',error.message);
       }
    }
    return userRef;
}

export const addCollectionAndDocuments =async(collectionKey,objectsToAdd) =>{
  const collectionRef =firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef =collectionRef.doc();
    batch.set(newDocRef,obj);
  });

  return await batch.commit();
};



export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);



export default firebase;