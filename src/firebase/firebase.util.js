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

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);



export default firebase;