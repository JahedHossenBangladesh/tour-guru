// import React, { useContext, useState } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../LoginForm/firebase.config';
// import { BookerContext } from '../../App'
// import { useHistory, useLocation } from 'react-router-dom';
// import HotelDetail from '../HotelDetail/HotelDetail';
// import handleGoogleSignIn from '../loginMangment/LoginMangment' ;
// import {handleGoogleSignOut }from '../loginMangment/LoginMangment';
// import LoginForm from '../LoginForm/LoginForm';

// const Login = () => {

//     const [loggedInUser, setLoggedInUser] = useContext(BookerContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };
//     const [user, setUser] = useState({
//         isSignedIn: false,
//         name: '',
//         email: ''
//     });


//  const dubaleHandeleGoogleSignIn = () => {

//      handleGoogleSignIn().then(res => setUser(res));

   
//     }
//     setLoggedInUser(user);


//   const dubaleHandeleGoogleSignOut = () => {

//         handleGoogleSignOut().then(res => setUser(res))
  
//     }


    

//     return (
//         <div className="App">
            
        

// {   
// user.isSignedIn ? <button onClick={dubaleHandeleGoogleSignOut}>Sign Out</button> :
//  <button onClick={dubaleHandeleGoogleSignIn}>Sign In with Google</button>


// }

            
//             {
//                 user.isSignedIn && <HotelDetail> </HotelDetail>
//             }

//         </div>
//     );
// };

// export default Login;