import React, { Component } from "react";
import { View, Text } from "react-native";

import SideMenu from "react-native-side-menu";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./Store";
import HomeWithMenu from "./Home";
import DetailsScreen from "./Details";
import { MENU_WIDTH } from "./Constants";

const App = StackNavigator({
  Home: { screen: HomeWithMenu },
  Details: { screen: DetailsScreen }
});

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
