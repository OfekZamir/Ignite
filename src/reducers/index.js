import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";

const initState = {
  name: "",
  isLOgged: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});

export default rootReducer;
