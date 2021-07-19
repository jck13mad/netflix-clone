import firebase from "firebase";
// initialize firebase app in the application.
const app = firebase.initializeApp({
    apiKey: "AIzaSyBztv1kqFnldxnaoG7XbYFb7hAQ5VpcNoE",
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: "https://netflix-clone-e6559-default-rtdb.firebaseio.com",
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`
});

const firebaseDatabase = app.database();
const firebaseAuth = app.auth();

export { firebaseDatabase, firebaseAuth };