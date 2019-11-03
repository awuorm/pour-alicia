import React from "react";
import { NavLink } from "react-router-dom";
import { StyledUserView } from "../styles";
import pour_alicia_logo_2 from "../imgs/pour_alicia_logo_2.png";
import home_icon_7 from "../imgs/home_icon_7.png";
const UserView = () => {
  return (
    <StyledUserView>
      <figure>
        <img alt="logo of pour alicia" src={pour_alicia_logo_2} />
      </figure>
      <div>
        <NavLink to="/dashboard/home" className="navlink-btn">
          <img alt="home logo" src={home_icon_7} />
            <span>Home</span>
        </NavLink>
      </div>
    </StyledUserView>
  );
};

export default UserView;
