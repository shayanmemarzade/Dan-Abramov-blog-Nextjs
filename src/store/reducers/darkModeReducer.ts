"use client"
import { DARK_MODE } from "../types";

// initial state
let initialState = {}
if (typeof window !== 'undefined') {
  initialState = {
    // checking mode from localstorage if falsey (e.g. 0, null, undefined, etc.) it will be false, otherwise true
    isdarkMode: JSON.parse(localStorage.getItem("darkmode") || 'false'),
  };
}
const darkModeReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        // getting value from the action file and changing isdarkMode State.
        isdarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
