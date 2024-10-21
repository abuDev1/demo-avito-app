import React from "react";

const initialState = {
  cards: [],
  loadingCards: false,
};

export const homeAdvertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/cards/start":
      return {
        ...state,
        loadingCards: true,
      };

    case "load/card/success":
      return {
        ...state,
        loadingCards: false,
        cards: action.payload,
      };

    default:
      return state;
  }
};
