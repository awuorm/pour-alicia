import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
    </div>
  );
}

export default App;
