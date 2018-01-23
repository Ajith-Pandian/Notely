import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { MENU_WIDTH } from "../Constants";

const MenuFooter = () => {
  let { sContainer, sText } = styles;
  return (
    <TouchableOpacity style={sContainer}>
      <Text style={sText}>APPLY</Text>
    </TouchableOpacity>
  );
};

export default MenuFooter;

const styles = StyleSheet.create({
  sContainer: {
    position: "absolute",
    bottom: 20,
    width: MENU_WIDTH - 40,
    borderWidth: 3,
    borderColor: "white",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  sText: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    color: "white"
  }
});
