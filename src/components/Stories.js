import React, { useState } from "react";
import { stories } from "../data";
import { StyledStories } from "../styles";

const Stories = props => {
  const [kidStories] = useState(stories);
  console.log("props from stories", props);
  return (
    <StyledStories>
      {kidStories.map(story => {
        if (story.id === Number(props.match.params.id)) {
          return (
            <div key={story.id}>
              <h3>{story.title}</h3>
              <img alt=" kids story" src={story.avatar} />
              <p>{story.story}</p>
            </div>
          );
        }
      })}
    </StyledStories>
  );
};

export default Stories;
