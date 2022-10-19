import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
  eventReducer,
});
