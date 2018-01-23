import React, { Component } from "react";
import { View, Text } from "react-native";

import SideMenu from "react-native-side-menu";
import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Menu from "./Menu";
import DetailsScreen from "./Details";
import { MENU_WIDTH } from "./Constants";

const HomeWithMenu = () => {
  return (
    <SideMenu
      menu={<Menu />}
      openMenuOffset={MENU_WIDTH}
      bounceBackOnOverdraw={false}
      disableGestures={false} // FIXME: Change on Filter Implementation
      menuPosition={"right"}
    >
      <Home />
    </SideMenu>
  );
};

HomeWithMenu.navigationOptions = {
  header: null
};

const App = StackNavigator({
  Home: { screen: HomeWithMenu },
  Details: { screen: DetailsScreen }
});

export default App;
