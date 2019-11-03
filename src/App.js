import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NotificationDrawer from "./components/NotificationDrawer";
import BackDrop from "./components/Backdrop";

function App(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="App">
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route
        path="/dashboard/home"
        render={props => (
          <Home
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            {...props}
          />
          )}
          />
          {drawerOpen ? <NotificationDrawer/> : <BackDrop/>}
    </div>
  );
}

export default App;
