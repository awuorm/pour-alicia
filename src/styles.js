import styled from "styled-components";

export const StyledUserView = styled.div`
  width: 20vw;
  height: 100vh;
  /* background: #F7E580; */
  border-right: 1px solid lightgray;
  figure {
    margin: 0;
    height: 120px;
    width: 200px;
    object-fit: fill;
    margin-bottom: 10vh;
    img {
      /* margin-top:0; */
      width: 80%;
      height: 100%;
    }
  }
  div {
    .navlink-btn {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      width: 20vw;
      border: none;
      background: white;
      :hover {
        color: #ffd131;
        border-bottom: 4px solid #ffd131;
      }
      img {
        margin-left: 0.5em;
        width: 5vw;
        height: 8vh;
      }
      span {
        margin-left: 0.5em;
      }
    }
  }
`;

export const StyledHome = styled.div`
  width: 80vw;
  height: 100vh;
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

export const StyledBackDrop = styled.div`
  display: none;
`;
