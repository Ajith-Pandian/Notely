import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";
import PersistReducer from "./PersistReducer";
import AppStateReducer from "./AppStateReducer";

const rootReducer = combineReducers({
  NotesReducer,
  PersistReducer,
  AppStateReducer
});

export default rootReducer;
