import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAgrpvAprCVi1QfhFwAFUA-mSrEFUkMEjg",
    authDomain: "chatroom-1734c.firebaseapp.com",
    databaseURL: "https://chatroom-1734c.firebaseio.com",
    projectId: "chatroom-1734c",
    storageBucket: "chatroom-1734c.appspot.com",
    messagingSenderId: "669326597693"
};


firebase.initializeApp(config);

export const provider = new firebase.auth.GithubAuthProvider().addScope('repo');
export const auth = firebase.auth();
export default firebase;
