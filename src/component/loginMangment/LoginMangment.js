import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
// import { useHistory, useLocation } from 'react-router-dom';
// import { BookerContext } from '../../App';
// import firebaseConfig from '../Login/firebase.config';

// import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import  { BookerContext} from "../../App";
import firebaseConfig from '../Login/firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

// console.log("BookerContext",BookerContext);
// const [loggedInUser, setLoggedInUser] = useContext(BookerContext);
// const history = useHistory();
// const location = useLocation();
// const { from } = location.state || { from: { pathname: "/" } };
// const [user, setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email: ''
// })



export const handleGoogleSignIn = () => {



    var provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)



        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            };
            return signedInUser;
            // setLoggedInUser(signedInUser);
            // history.replace(from);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;

        });
}


  export const handleGoogleSignOut= () => {

  return  firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
            isSignedIn : false ,
               name:'',
               email:''

        };
      return  signedOutUser
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });


}

// export handleGoogleSignOut;
export default handleGoogleSignIn;

