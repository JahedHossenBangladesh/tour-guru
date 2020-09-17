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
export  const UserContext = createContext();
export  const PlaceContext = createContext();

function App() {
   const [matchPlace,setMatchPlace] = useState({});
   const [loggedInUser,setLoggedInUser] = useState({});
  return (
  <>
  <p>the id is {matchPlace.name}</p>
  <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
  <PlaceContext.Provider value={[matchPlace,setMatchPlace]}>
    
    <p></p>
  <Router>
<Switch>
<Route  exact path="/">
  <Home></Home>
</Route>
<Route path="/booking/:id">
<Booking></Booking>
</Route>
<Route path="/login">
  <Login></Login>
</Route>
<Route path="/hotelDetail" >
  <HotelDetail></HotelDetail>

</Route>

</Switch>

  </Router>

  </PlaceContext.Provider>
  </UserContext.Provider>
  </>
  );
}

export default App;
