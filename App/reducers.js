import { combineReducers } from "redux";

import { GET_MEMBER, DELETE_MEMBER } from "./actions";
let dataState = { members: [] };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case GET_MEMBER:
      let { members } = action.data;
      return { ...state, members };

    case DELETE_MEMBER: {
      let { id } = action.data;

      //clone the current state
      let clone = JSON.parse(JSON.stringify(state.members));

      //check if quote already exist
      const index = clone.findIndex((obj) => obj.id === id);

      //if the quote is in the array, remove the quote
      if (index !== -1) clone.splice(index, 1);

      return { ...state, members: clone };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({ dataReducer });
export default rootReducer;
