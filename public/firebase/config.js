const firebaseConfig = {
  apiKey: "AIzaSyBpdG21_yuFp2qSs1tFod6kEYKQgz48EkI",
  authDomain: "oss-project-1cbed.firebaseapp.com",
  databaseURL: "https://oss-project-1cbed-default-rtdb.firebaseio.com",
  projectId: "oss-project-1cbed",
  storageBucket: "oss-project-1cbed.appspot.com",
  messagingSenderId: "465125278376",
  appId: "1:465125278376:web:715bae1530e0286facb89d",
  measurementId: "G-TJ9WNDM54K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
