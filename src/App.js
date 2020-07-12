import React from 'react';
import Background from "./components/background/Background";
import Hex from "./components/hex/Hex";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/hex">HEX</Link>
          </li>
        </ul>
        <Route exact path="/" component={Background} />
        <Route exact path="/hex" component={Hex} />
      </div>
    </Router>
  );
}

export default App;



