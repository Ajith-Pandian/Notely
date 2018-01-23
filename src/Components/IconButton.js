import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "./Icons";
import { MENU_TEXT_ENABLE_COLOR, HEADER_BG_COLOR } from "../Constants";

const IconButton = props => {
  let { type, onPress, style, iconStyle, hasBadge } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={style}>
      <Icon name={type} {...iconStyle} />
      {hasBadge ? <View style={styles.sBadge} /> : null}
    </TouchableOpacity>
  );
};

IconButton.FILTER = "filter-list";
IconButton.FAVORITE = "favorite";
IconButton.STAR = "star";
IconButton.DONE = "done";
IconButton.CLOSE = "close";
IconButton.ADD = "add";

export default IconButton;

const BADGE_SIZE = 10;
const styles = StyleSheet.create({
  sBadge: {
    position: "absolute",
    left: 5,
    top: 5,
    height: BADGE_SIZE,
    width: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderWidth: 1,
    borderColor: HEADER_BG_COLOR,
    backgroundColor: MENU_TEXT_ENABLE_COLOR
  }
});
