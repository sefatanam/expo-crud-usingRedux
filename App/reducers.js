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

      let clone = JSON.parse(JSON.stringify(state.members));

      const index = clone.findIndex((obj) => obj.id === id);

      if (index !== -1) clone.splice(index, 1);

      return { ...state, members: clone };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({ dataReducer });
export default rootReducer;
