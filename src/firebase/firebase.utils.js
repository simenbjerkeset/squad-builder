import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuz7BzcukX9OxuGsQhfeu5X087gEPQiyQ",
    authDomain: "squad-builder-b0309.firebaseapp.com",
    databaseURL: "https://squad-builder-b0309.firebaseio.com",
    projectId: "squad-builder-b0309",
    storageBucket: "squad-builder-b0309.appspot.com",
    messagingSenderId: "800902381414",
    appId: "1:800902381414:web:1a3ea9b4ca7346597452a7"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;