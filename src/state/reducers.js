import * as types from "./actionTypes";

const initialQuotes = {
  quotes: []
};

export const quotesReducers = (state = initialQuotes, action) => {
  switch (action.type) {
    case types.GET_QUOTES:
      return { ...state, quotes: action.payload };
    default:
      return state;
  }
};
