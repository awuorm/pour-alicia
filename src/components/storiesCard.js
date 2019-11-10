import React, { useState } from "react";
import { stories } from "../data";
import { StyledStoriesCard } from "../styles";
import {NavLink} from "react-router-dom";

const StoriesCard = props => {
  const [kidStories, setKidStories] = useState(stories);
  console.log(kidStories);
  return (
    <StyledStoriesCard>
      <h3>Today, we have for you!</h3>
      <div>
      {kidStories.map((stories, index) => {
        return (
            <div key={index}>
              <img alt="stories" src={stories.avatar} />
              <NavLink style={{ marginTop:"0.5em", color:"black", textDecoration:"none", padding:"1em"}} to={`/dashboard/home/stories/${index}`}>{stories.title}</NavLink>
            </div>
        );
      })}
          </div>
    </StyledStoriesCard>
  );
};

export default StoriesCard;
