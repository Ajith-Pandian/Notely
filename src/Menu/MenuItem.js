import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import Icon from "../Components/Icons";
import {
  MENU_WIDTH,
  MENU_TEXT_ENABLE_COLOR,
  MENU_TEXT_DISABLE_COLOR,
  MENU_IC_ENABLE_COLOR,
  MENU_IC_DISABLE_COLOR,
  ITEM_TITLE_SIZE,
  ITEM_PADDING
} from "../Constants";

const MenuItem = props => {
  let { type, onSelect, isSelected } = props;
  let color = isSelected ? MENU_TEXT_ENABLE_COLOR : MENU_TEXT_DISABLE_COLOR;
  let iconColor = isSelected ? MENU_IC_ENABLE_COLOR : MENU_IC_DISABLE_COLOR;
  return (
    <TouchableOpacity
      style={styles.sContainer}
      onPress={() => onSelect(!isSelected)}
    >
      <Text style={{ fontSize: ITEM_TITLE_SIZE, color }}>{type}</Text>
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
    marginVertical: ITEM_PADDING
  }
});
