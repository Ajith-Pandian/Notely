import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MENU_WIDTH, HEADER_HEIGHT } from "../Constants";
import IconButton from "../Components/IconButton";

const COLOR = "white";

const MenuHeader = () => {
  let { sContainer, sHeaderText } = styles;
  return (
    <View style={sContainer}>
      <Text style={sHeaderText}>FILTER</Text>
      <IconButton
        type={IconButton.CLOSE}
        iconStyle={{ color: COLOR }}
        onPress={() => console.log("Add clicked")}
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
  sHeaderText: { fontSize: 20, color: COLOR }
});
