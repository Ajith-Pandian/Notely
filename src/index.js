import React, { Component } from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import SideMenu from "react-native-side-menu";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./Store";
import HomeWithMenu from "./Home";
import DetailsScreen from "./Details";
import Loading from "./Components/Loading";
import { MENU_WIDTH, HEADER_BG_COLOR } from "./Constants";

const StackApp = StackNavigator({
  Home: { screen: HomeWithMenu },
  Details: { screen: DetailsScreen }
});

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 20 : undefined, //StatusBar Height
      backgroundColor
    }}
  >
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

const App = () => (
  <View style={{ flex: 1 }}>
    <MyStatusBar backgroundColor={HEADER_BG_COLOR} barStyle="dark-content" />
    <StackApp />
  </View>
);

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default ReduxApp;
