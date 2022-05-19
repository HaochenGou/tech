import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Home';

const App=()=> {
  return (
    <Router>
      <Routes>
      <Route
      exact
      path={process.env.PUBLIC_URL+"/"}
      component={Home}
      >
      </Route>
      </Routes>
    </Router>
  );
};

export default App;
