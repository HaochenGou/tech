import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './Home';

function App() {
  return (
    <Router>
      <Route
      exact
      path={process.env.PUBLIC_URL+"/"}
      component={Home}
      >

      </Route>
    </Router>
  

  );
}

export default App;
