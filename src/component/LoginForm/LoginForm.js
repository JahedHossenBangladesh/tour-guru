import React, { useContext, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { BookerContext } from '../../App';
import HotelDetail from '../HotelDetail/HotelDetail';

import Header from '../Header/Header';
import { useHistory, useLocation } from 'react-router-dom';



const LoginForm = () => {

    
    
    const [newUser,setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error :'',
        success:false
    });


    
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(BookerContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }




// this is google sign in 
    const handleSignIn= () => {
        // const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(res =>  {
               const {displayName,email} =res.user;
               const signedInUser ={
                  isSignedIn:true,
                  name: displayName,
                  email:email,
                  sucess:true

               }
              setUser(signedInUser);
             setLoggedInUser(signedInUser);
             history.replace(from)
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
           });



    }
const  handleSignOut = () => {
    firebase.auth().signOut().then(res => {
         const signOutUser ={
            isSignedIn:false,
            name: '',
            email:'' 
                }     
                setUser(signOutUser);     
      })
      .catch(error => {

      });



}

    // this is own authentication
    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
        
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if( e.target.name === 'password'){

            isFormValid =  /^(?=.*\d).{8,}$/.test(e.target.value) && e.target.value.length > 6;
           
        }
        if(isFormValid){
         const newUserInfo = {...user};
         newUserInfo[e.target.name] = e.target.value;
         setUser(newUserInfo);

        }
        
        }




    const handleSubmit = (e) => {
   if( newUser && user.name && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res =>{
        const newUserInfo = {...user};
        newUserInfo.error ='';
        newUserInfo.success= true;
        setUser(newUserInfo);
        updateUserInfo(user.name);
        
         // i cant use the history api becouse if use history in the line the account is not creat
         
         
    })
    .catch(error =>{
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        const newUserInfo ={...user};
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        setUser(newUserInfo);
        
        // ...
        console.log(errorCode,errorMessage);
      });
   }

if(!newUser && user.name && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res =>{
        const newUserInfo = {...user};
        newUserInfo.error ='';
        newUserInfo.success= true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);

        console.log('user name', res.user);

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        const newUserInfo ={...user};
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });

}

   e.preventDefault();
    }

    
    const updateUserInfo = name =>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
         
        }).then(function() {
            console.log('user name get')
        }).catch(function(error) {
          console.log(error)
        });



    }

    return (
        <div className="App" id="form">

<input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id=""/>
<label htmlFor="newUser"> New User Sign up</label>



            <form onSubmit={ handleSubmit}>
         
            
    { newUser && <input type="text" name="name" onBlur={handleBlur}  placeholder="Your Name" id="" required/>}
            <br/>
            <input type="text" onBlur={handleBlur} name="email" id="" required/>
            <br/>
           <input type="password" onBlur={handleBlur} name="password" id="" required/>
           <br/>
           <input type="submit" value={newUser ? 'Sign Up' : 'Sign in'} />


            </form>

            <p style={{color:'red'}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}> {newUser ?'create' : 'login'} account successfully</p>}

            
            <button>Login by facebook </button>
            <br/>
             {

                user.isSignedIn ?  <button onClick={handleSignIn}>Google Sign out</button> :
                <button onClick={handleSignIn}>Google Sign in</button>
            } 
            {
                user.isSignedIn &&  <HotelDetail></HotelDetail>
                
                
 
             }
            {
                user.success && <HotelDetail></HotelDetail>
                               

            }

        </div>
    );
};

export default LoginForm;