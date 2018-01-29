import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import NotesReducer from "./NotesReducer";
import PersistReducer from "./PersistReducer";
import AppStateReducer from "./AppStateReducer";

const notesPersistConfig = {
  key: "NotesReducer",
  storage: AsyncStorage,
  whitelist: ["notes"]
};

const rootReducer = combineReducers({
  NotesReducer: persistReducer(notesPersistConfig, NotesReducer),
  PersistReducer,
  AppStateReducer
});

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["NotesReducer"]
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
