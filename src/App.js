import React, { createContext, useState } from 'react';

import './App.css';
import Home from './component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './component/Booking/Booking';
import Login from './component/Login/Login';
import HotelDetail from './component/HotelDetail/HotelDetail';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Header from './component/Header/Header';
import Authentication from './component/Authentication/Authentication';
import LoginForm from './component/LoginForm/LoginForm';
export  const BookerContext = createContext();
export  const PlaceContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
   const [matchPlace,setMatchPlace] = useState({});
  
  return (
  <>

  <BookerContext.Provider value ={[loggedInUser,setLoggedInUser]}>
  <PlaceContext.Provider value={[matchPlace,setMatchPlace]}>
    

  <Router>
  <Header></Header>

<Switch>
<Route  exact path="/">

  <Home></Home>
</Route>
<Route  exact path="/home">

  <Home></Home>
</Route>
<Route path="/booking/:id">

<Booking></Booking>
</Route>

<Route exact path="/login">

  <LoginForm></LoginForm>
</Route>
<PrivateRoute path="/hotelDetail" >

  <HotelDetail></HotelDetail>

</PrivateRoute>

</Switch>

  </Router>

  </PlaceContext.Provider>
  </BookerContext.Provider>
  </>
  );
}

export default App;
