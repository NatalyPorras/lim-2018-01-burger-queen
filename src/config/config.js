const firebase = require("firebase");
require("firebase/firestore");

const config = {
    apiKey: "AIzaSyAzJ1ZVbgeyav_4BOFCJ_8EYFLY_er8K2I",
    authDomain: "burguer-queen-40482.firebaseapp.com",
    databaseURL: "https://burguer-queen-40482.firebaseio.com",
    projectId: "burguer-queen-40482",
    storageBucket: "burguer-queen-40482.appspot.com",
    messagingSenderId: "529739000036"
  };
  firebase.initializeApp(config);

  export const db= firebase.firestore();