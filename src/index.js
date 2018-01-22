import React, { Component } from "react";
import { View, Text } from "react-native";

import SideMenu from "react-native-side-menu";

import Contents from "./Contents";
import Menu from "./Menu";
import { DRAWER_WIDTH } from "./Constants";

export default class App extends Component {
  render() {
    const menu = <Menu />;
    return (
      <SideMenu
        menu={menu}
        openMenuOffset={DRAWER_WIDTH}
        bounceBackOnOverdraw={false}
        menuPosition={"right"}
      >
        <Contents />
      </SideMenu>
    );
  }
}
