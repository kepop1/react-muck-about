import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Routes from "./Routes";
import AppContext from "./AppContext";

const App = () => {
  const [checkout, setCheckout] = useState([]);

  return (
    <AppContext.Provider value={{ checkout, setCheckout }}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
