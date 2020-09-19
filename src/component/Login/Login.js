import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { BookerContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import HotelDetail from '../HotelDetail/HotelDetail';
import handleGoogleSignIn from '../loginMangment/LoginMangment' ;
import {handleGoogleSignOut }from '../loginMangment/LoginMangment';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(BookerContext);
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    });

    // const double = SignedInUser ;
    const dubaleHandeleGoogleSignIn = () => {

     handleGoogleSignIn().then(res => setUser(res));
  
    //  signedInUser().then(res => console.log());

    }
    setLoggedInUser(user);

    const dubaleHandeleGoogleSignOut = () => {

        handleGoogleSignOut().then(res => setUser(res))
    }


    
    // setLoggedInUser(signedInUser);
//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//    const handleGoogleSignIn = () => {



//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider)



//             .then(res => {
//                 const { displayName, email } = res.user;
//                 const signedInUser = {
//                     isSignedIn: true,
//                     name: displayName,
//                     email: email
//                 };
//                 setUser(signedInUser);
//                 setLoggedInUser(signedInUser);
//                 history.replace(from);
//             })
//             .catch(function (error) {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;

//             });
//     }
   

//     const handleGoogleSignOut= () => {

//         firebase.auth().signOut()
//         .then(res => {
//             const signedOutUser ={
//                    insSingnedIn : false,
//                    name:'',
//                    email:'',

//             }
//             setUser (signedOutUser)
//             // Sign-out successful.
//           }).catch(function(error) {
//             // An error happened.
//           });


//     }
    return (
        <div className="App">
        

{   
// user.isSignedIn ? <button onClick={dubaleHandeleGoogleSignOut}>Sign Out</button> :
 <button onClick={dubaleHandeleGoogleSignIn}>Sign In</button>


}

            
            {
                user.isSignedIn && <HotelDetail> </HotelDetail>
            }

        </div>
    );
};

export default Login;