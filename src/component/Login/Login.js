import React, {useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {BookerContext}  from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(BookerContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

const handleGoogleSignIn = () => {



 var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result)
        {
         const {displayName, email} = result.user;
      const signedInUser = {name:displayName, email};
      setLoggedInUser(signedInUser);
       history.replace(from);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
           
          });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}> this is button</button>
        </div>
    );
};

export default Login;