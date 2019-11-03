import React from "react";
import { StyledHome } from "../styles";
import search_icon_3 from "../imgs/search_icon_3.png";
import bell_icon_3 from "../imgs/bell_icon_3.png";
import NotificationDrawer from "./NotificationDrawer";
import BackDrop from "./Backdrop";



const Home = (props) => {
    const {drawerOpen, setDrawerOpen} = props;

    const handleNotification = (e) => {
        e.preventDefault();
        setDrawerOpen(!drawerOpen);
    }
  return (
    <StyledHome>
      <div>
        <img alt="search logo" src={search_icon_3} />
        <input placeholder="search..." />
        <button onClick={handleNotification}>
          <img alt="bell icon" src={bell_icon_3} />
        </button>
      </div>
    </StyledHome>
  );
};

export default Home;
