import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { MENU_WIDTH, ITEM_DESC_SIZE } from "../Constants";

const MenuFooter = ({ onApplyPress }) => {
  let { sContainer, sText } = styles;
  return (
    <TouchableOpacity style={sContainer} onPress={() => onApplyPress()}>
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
    fontSize: ITEM_DESC_SIZE,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    color: "white"
  }
});
