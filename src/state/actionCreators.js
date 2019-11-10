import axios from "axios";
import * as types from "../state/actionTypes";

export const getQuotesError = error => {
  return { type: types.GET_QUOTES_ERROR, payload: error };
};

export const getQuotes = () => dispatch => {
  axios
    .get("http://quotes.rest/qod.json")
    .then(res => {
        console.log("response from server",res.data.contents.quotes);
      dispatch({ type: types.GET_QUOTES, payload: res.data.contents.quotes});
    })
    .catch(error => {
      dispatch(getQuotesError(error));
    });
};
