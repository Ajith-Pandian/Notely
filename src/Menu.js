import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MENU_BG_COLOR } from "./Constants";

const Menu = () => (
  <View style={styles.sContainer}>
    <Text style={styles.sMenu}>Menu</Text>
  </View>
);
export default Menu;

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MENU_BG_COLOR
  },
  sMenu: { fontSize: 20, color: "white" }
});
