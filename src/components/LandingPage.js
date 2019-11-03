import React from "react";
import { StyledLandingPage } from "../styles";
import {NavLink} from "react-router-dom";

const LandingPage = props => {
  return (
    <StyledLandingPage>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </StyledLandingPage>
  );
};

export default LandingPage;
