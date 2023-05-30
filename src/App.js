import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RouteList from './RouteList';

/**Component for App */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <RouteList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
