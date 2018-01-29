import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import logger from "redux-logger";
import persistedReducer from "./Reducers";

const middlewares = [];
middlewares.push(thunk);
//Configuring Redux Logger only for Development
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middlewares))
);

export let persistor = persistStore(store);

// persistStore(store, {
//   storage: AsyncStorage,
//   whitelist: ["NotesReducer"]
// });
