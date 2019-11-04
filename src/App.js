import React, { useState } from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NotificationDrawer from "./components/NotificationDrawer";
import BackDrop from "./components/Backdrop";
import UserDrawer from "./components/UserDrawer";
import LandingPage from "./components/LandingPage";

export function App(props) {
  console.log("props from app",props);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  return (
    <div className="App">
      <Route  exact path="/" component ={LandingPage}/>
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route
        path="/dashboard/home"
        render={props => (
          <Home
          userDrawerOpen={userDrawerOpen}
          setUserDrawerOpen={setUserDrawerOpen}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            {...props}
          />
          )}
          />
          {drawerOpen ? <NotificationDrawer/> : <BackDrop/>}
          {userDrawerOpen ? <UserDrawer/> : <BackDrop/>}
    </div>
  );
}

export default connect(state => state)(App);
