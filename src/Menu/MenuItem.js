import React from "react";
import { TouchableOpacity, Text } from "react-native";

import {
  MENU_WIDTH,
  MENU_TEXT_ENABLE_COLOR,
  MENU_TEXT_DISABLE_COLOR,
  MENU_IC_ENABLE_COLOR,
  MENU_IC_DISABLE_COLOR
} from "../Constants";
import Icon from "../Components/Icons";

const MenuItem = ({ type, isEnabled }) => {
  let color = isEnabled ? MENU_TEXT_ENABLE_COLOR : MENU_TEXT_DISABLE_COLOR;
  let iconColor = isEnabled ? MENU_IC_ENABLE_COLOR : MENU_IC_DISABLE_COLOR;
  return (
    <TouchableOpacity style={styles.sContainer}>
      <Text style={{ fontSize: 20, color }}>{type}</Text>
      <Icon name={Icon.DONE} color={iconColor} />
    </TouchableOpacity>
  );
};

MenuItem.HEARTED = "Hearted";
MenuItem.FAVORITE = "Favorite";
MenuItem.POEMS = "Poems";
MenuItem.STORY = "Story";

export default MenuItem;

const styles = StyleSheet.create({
  sContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: MENU_WIDTH - 40,
    marginVertical: 20
  }
});
