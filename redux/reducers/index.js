import { combineReducers } from "redux";

import generalReducer from "./general";

const rootReducers = combineReducers({
  general: generalReducer,
});

export default rootReducers;
