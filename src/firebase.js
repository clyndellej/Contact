import  firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgpcZTA4ekQA5kuoLxSdsmYv3pKorOHwY",
    authDomain: "contact-database-6715a.firebaseapp.com",
    databaseURL: "https://contact-database-6715a-default-rtdb.firebaseio.com",
    projectId: "contact-database-6715a",
    storageBucket: "contact-database-6715a.appspot.com",
    messagingSenderId: "50110694389",
    appId: "1:50110694389:web:94bdaf557825a244ae16bc"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics()
  export default firebase