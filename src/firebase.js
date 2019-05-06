import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCnz43yq5xgOwWZRntTLVAIEEErx1wt9w8",
  authDomain: "lab-course-2.firebaseapp.com",
  databaseURL: "https://lab-course-2.firebaseio.com",
  projectId: "lab-course-2",
  storageBucket: "lab-course-2.appspot.com",
  messagingSenderId: "1040191193881"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebaseTeams = firebaseDB.ref('teams')

export {
    firebase,
    firebaseMatches,
    firebaseTeams,
    firebaseDB
}