import React, { useState } from "react";
import { stories } from "../data";
import { StyledStoriesCard } from "../styles";
import { NavLink } from "react-router-dom";
import Recommended from "./Recommended";
import Stories from "./Stories";
import StoriesByAge from "./StoriesByAge";
import StoriesByGenre from "./StoriesByGenre";

const StoriesCard = props => {
  const [kidStories] = useState(stories);
  console.log(kidStories);
  return (
    <StyledStoriesCard>
      <h3>Today, we have for you!</h3>
      <div>
        {kidStories.map((stories, index) => {
          return (
            <div key={stories.id}>
              <img alt="stories" src={stories.avatar} />

              <NavLink
                style={{
                  marginTop: "0.8em",
                  color: "black",
                  textDecoration: "none",
                  padding: "1em"
                }}
                to={`/dashboard/home/stories/${stories.id}`}
              >
                {stories.title}
              </NavLink>
            </div>
          );
        })}
      </div>
      <Recommended/>
      <StoriesByAge/>
      <StoriesByGenre/>
    </StyledStoriesCard>
  );
};

export default StoriesCard;
