import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";
import PersistReducer from "./PersistReducer";

const rootReducer = combineReducers({
  NotesReducer,
  PersistReducer
});

export default rootReducer;
