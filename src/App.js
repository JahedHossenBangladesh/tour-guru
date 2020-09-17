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
export  const PlaceContext = createContext();

function App() {
   const [matchPlace,setMatchPlace] = useState({});
  return (
  <>
  <p>the id is {matchPlace.name}</p>
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

</Switch>

  </Router>

  </PlaceContext.Provider>
  </>
  );
}

export default App;
