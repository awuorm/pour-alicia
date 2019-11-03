import React from "react";
import { StyledHome } from "../styles";
import search_icon_3 from "../imgs/search_icon_3.png";
import bell_icon_3 from "../imgs/bell_icon_3.png";
import user_icon_2 from "../imgs/user_icon_2.png";

const Home = props => {
  const { drawerOpen, setDrawerOpen,userDrawerOpen,setUserDrawerOpen } = props;

  const handleNotification = e => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen);
  };

  const handleUserDrawer = e => {
    e.preventDefault();
    setUserDrawerOpen(!userDrawerOpen);
  }
  return (
    <StyledHome>
      <div>
        <img alt="search logo" src={search_icon_3} />
        <input placeholder="search..." />
        <button onClick={handleNotification}>
          <img alt="bell icon" src={bell_icon_3} />
        </button>
        <button onClick={handleUserDrawer}>
          <img alt="user icon" src={user_icon_2} />
        </button>
      </div>
    </StyledHome>
  );
};

export default Home;
