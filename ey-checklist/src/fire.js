import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDHzu9efn4uCznbna4qfxsfO5AE6-c-v4c",
    authDomain: "ey-check.firebaseapp.com",
    databaseURL: "https://ey-check.firebaseio.com",
    projectId: "ey-check",
    storageBucket: "ey-check.appspot.com",
    messagingSenderId: "722679983847",
    appId: "1:722679983847:web:8d36d7a3330ea16f42bc42",
    measurementId: "G-S05ZG4LJ3F"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;