import { combineReducers } from "redux";

import { home } from "./home/reducer";

const appReducer = combineReducers({ home });
export default appReducer;
