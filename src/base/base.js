import firebase from 'firebase';

// Firebase settings here 
const firebaseConfig = {
  apiKey: "AIzaSyBaPtM3zRQEwWF-2PJUuLlDR5aWLCy3OuQ",
  authDomain: "trainingstock-c16e5.firebaseapp.com",
  databaseURL: "https://trainingstock-c16e5.firebaseio.com",
  projectId: "trainingstock-c16e5",
  storageBucket: "trainingstock-c16e5.appspot.com",
  messagingSenderId: "780122449915"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth;





















// //import * as firebase from 'firebase';
// import Rebase from 're-base'
// import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyBaPtM3zRQEwWF-2PJUuLlDR5aWLCy3OuQ",
//   authDomain: "trainingstock-c16e5.firebaseapp.com",
//   databaseURL: "https://trainingstock-c16e5.firebaseio.com",
//   projectId: "trainingstock-c16e5",
//   storageBucket: "trainingstock-c16e5.appspot.com",
//   messagingSenderId: "780122449915"
// }

// const app = firebase.initializeApp(config)
// const base = Rebase.createClass(app.database())


// export default base;
// // import Rebase from 're-base';

// // const base = Rebase.createClass({
// //   apiKey: "AIzaSyBaPtM3zRQEwWF-2PJUuLlDR5aWLCy3OuQ",
// //   authDomain: "trainingstock-c16e5.firebaseapp.com",
// //   databaseURL: "https://trainingstock-c16e5.firebaseio.com",
// //   projectId: "trainingstock-c16e5",
// //   storageBucket: "trainingstock-c16e5.appspot.com",
// //   messagingSenderId: "780122449915"
// //   });

// // export default base;

//   // firebase.initializeApp(config);

//   // const database = firebase.database();
//   // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//   // export {firebase, googleAuthProvider, database as default};

// //   firebase.database().ref().set({
// //       name: 'Mariia Muzykantova'
// //   })
