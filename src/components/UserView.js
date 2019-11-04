import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { StyledUserView } from "../styles";
import pour_alicia_logo_2 from "../imgs/pour_alicia_logo_2.png";
import home_icon_7 from "../imgs/home_icon_7.png";
import * as actionCreators from "../state/actionCreators";
import { StyledQuotes } from "../styles";
export const UserView = props => {
  const { getQuotes, quotes } = props;
  console.log("props from user view", quotes.quotes);
  useEffect(() => {
    getQuotes();
  }, [getQuotes]);
  let fetchedQuotes = quotes.quotes;
  console.log("props from user view", fetchedQuotes);
  return (
    <StyledUserView>
      <figure>
        <img alt="logo of pour alicia" src={pour_alicia_logo_2} />
      </figure>
      {fetchedQuotes.map((quote, index) => {
        return (
          <StyledQuotes key={index}>
            "{quote.quote}"
            <br />  ~{quote.author}
          </StyledQuotes>
        );
      })}
      <div>
        <NavLink to="/dashboard/home" className="navlink-btn">
          <img alt="home logo" src={home_icon_7} />
          <span>Home</span>
        </NavLink>
      </div>
    </StyledUserView>
  );
};

export default connect(
  state => state,
  actionCreators
)(UserView);
