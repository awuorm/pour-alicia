import styled from "styled-components";
import landing_page_2 from "../src/imgs/landing_page_2.jpg";

export const StyledUserView = styled.div`
  width: 20vw;
  height: 1200px;
  border-right: 1px solid lightgray;
  figure {
    margin: 0;
    height: 80px;
    width: 160px;
    object-fit: fill;
    margin-bottom: 0;
    img {
      width: 80%;
      height: 100%;
    }
  }
  div {
    .navlink-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      width: 20vw;
      border: none;
      background: white;
      :hover {
        color: #ffd131;
        /* border-bottom: 4px solid #ffd131; */
      }
      img {
        margin-top: 0.5em;
        margin-left: 1em;
        width: 3vw;
        height: 6vh;
      }
      span {
        margin-top: 0.5em;
        margin-left: 0.5em;
      }
    }
  }
`;

export const StyledHome = styled.div`
  width: 80vw;
  height: 1200px;
  z-index: 100;
  div {
    display: flex;
    border-bottom: 1px solid lightgray;
    img {
      width: 3vw;
      height: 6vh;
      padding: 0.5em;
    }
    input {
      width: 60vw;
      border: none;
      font-size: 1.5em;
    }
    button {
      border: none;
      background-color: white;
    }
  }
`;

export const StyledNotification = styled.div`
  height: 30vh;
  width: 20vw;
  position: fixed;
  padding: 0.5em;
  right: 2vw;
  top: 13vh;
  z-index: 200;
  background: #88b7d5;
  border: 4px solid #c2e1f5;
  :after,
  :before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  :after {
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #88b7d5;
    border-width: 30px;
    margin-left: -30px;
  }
  :before {
    border-color: rgba(194, 225, 245, 0);
    border-bottom-color: #c2e1f5;
    border-width: 36px;
    margin-left: -36px;
  }
`;

export const StyledUserDrawer = styled.div`
  height: 70vh;
  width: 20vw;
  position: fixed;
  padding: 0.5em;
  right: 1vw;
  top: 9vh;
  z-index: 200;
  background: white;
  box-shadow: 0 0 6px #000;
`;

export const StyledBackDrop = styled.div`
  display: none;
`;

export const StyledLandingPage = styled.div`
  background-image: url(${landing_page_2});
  background-size: 50%;
  height: 100vh;
  width: 100vw;
`;

export const StyledQuotes = styled.div`
  background: #add100; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 80%;
  margin-left: 10%;
  margin-top: 0;
  padding: 0.5em;
  color: aliceblue;
  border-radius: 0.5em;
`;

export const StyledStoriesCard = styled.div`
  width: 90%;
  height: 1200px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 40%;
    border: none;
    div {
      width: 25%;
      height: 55%;
      display: flex;
      flex-direction: column;
      border: 1px solid lightgray;
      margin-left: 5%;

      img {
        width: 80%;
        height: 80%;
      }
    }
  }
`;

export const StyledStories = styled.div`
  width: 90%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      margin-top: 5%;
      text-align: center;
    }
    img {
      width: 50%;
      height: 40%;
      border: 1px solid lightgray;
    }
    p {
      width: 90%;
      padding: 1em;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
