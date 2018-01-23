import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MENU_BG_COLOR } from "../Constants";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";

const Menu = () => (
  <View style={styles.sContainer}>
    <MenuHeader />
    <MenuItem type={MenuItem.HEARTED} isEnabled />
    <MenuItem type={MenuItem.FAVORITE} />
    <MenuItem type={MenuItem.POEMS} />
    <MenuItem type={MenuItem.STORY} />
    <MenuFooter />
  </View>
);
export default Menu;

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: MENU_BG_COLOR
  }
});
