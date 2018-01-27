import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MENU_WIDTH, HEADER_HEIGHT, ITEM_TITLE_SIZE } from "../Constants";
import IconButton from "../Components/IconButton";

const COLOR = "white";

const MenuHeader = ({ onClosePress }) => {
  let { sContainer, sHeaderText } = styles;
  return (
    <View style={sContainer}>
      <Text style={sHeaderText}>FILTER</Text>
      <IconButton
        type={IconButton.CLOSE}
        iconStyle={{ color: COLOR }}
        onPress={() => onClosePress()}
      />
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  sContainer: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: MENU_WIDTH - 40,
    paddingBottom: 20
  },
  sHeaderText: {
    fontSize: ITEM_TITLE_SIZE,
    color: COLOR
  }
});
