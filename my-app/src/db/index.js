import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvDWoou0ge7iY2mWSfOOcQEWcvUWd-D58",
  authDomain: "test1-29d82.firebaseapp.com",
  databaseURL: "https://test1-29d82.firebaseio.com",
  projectId: "test1-29d82",
  storageBucket: "test1-29d82.appspot.com",
  messagingSenderId: "262917646852",
  appId: "1:262917646852:web:56c00b8b02175e58c8a351",
  measurementId: "G-ESDJMHXZPN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if(typeof firebase.analytics === 'function') {
  firebase.analytics();
}

export const db = firebase.firestore();
export const dbChannels = db.collection('channels');

export const getCollectionMessages = (channelId) => {
  return db.collection(`channels/${channelId}/messages`);
};