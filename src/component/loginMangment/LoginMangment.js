// import React, { useContext, useState } from 'react';
// import * as firebase from "firebase/app";

// import { useHistory, useLocation } from "react-router-dom";
// import  { BookerContext} from "../../App";
// import firebaseConfig from '../LoginForm/firebase.config';

// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }





// export const handleGoogleSignIn = () => {



//     var provider = new firebase.auth.GoogleAuthProvider();
//    return firebase.auth().signInWithPopup(provider)



//         .then(res => {
//             const { displayName, email } = res.user;
//             const signedInUser = {
//                 isSignedIn: true,
//                 name: displayName,
//                 email: email
//             };
//             return signedInUser;
          
//         })
//         .catch(function (error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;

//         });
// }


//   export const handleGoogleSignOut= () => {

//   return  firebase.auth().signOut()
//     .then(res => {
//         const signedOutUser = {
//             isSignedIn : false ,
//                name:'',
//                email:''

//         };
//       return  signedOutUser
       
//       }).catch(function(error) {
       
//       });


// }


// export default handleGoogleSignIn;

