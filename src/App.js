import React from 'react';

import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './component/Booking/Booking';

function App() {
  return (
  <Router>
<Switch>
<Route  exact path="/">
  <Home></Home>
</Route>
<Route path="/booking/:pd">
  <Booking></Booking>


</Route>

</Switch>

  </Router>
  );
}

export default App;
