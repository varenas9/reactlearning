import firebase from 'firebase/app';
import 'firebase/firebase-database';

const config = {
  apiKey: "AIzaSyBbjHJq2E7EaR3mLUssr4j1yl2cOT7SRMQ",
  authDomain: "to-do-list-98c18.firebaseapp.com",
  databaseURL: "https://to-do-list-98c18.firebaseio.com",
  projectId: "to-do-list-98c18"
};
firebase.initializeApp(config);

export const db = firebase.database();

export default firebase;