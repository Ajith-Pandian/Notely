import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "./Icons";
import {
  MENU_TEXT_ENABLE_COLOR,
  HEADER_BG_COLOR,
  BADGE_SIZE
} from "../Constants";

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
IconButton.HEART = "star";
IconButton.DONE = "done";
IconButton.CLOSE = "close";
IconButton.ADD = "add";
IconButton.BACK = "arrow-back";
IconButton.DELETE = "delete";

export default IconButton;

const styles = StyleSheet.create({
  sBadge: {
    position: "absolute",
    left: 0,
    top: BADGE_SIZE / 2,
    height: BADGE_SIZE,
    width: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderWidth: 1,
    borderColor: HEADER_BG_COLOR,
    backgroundColor: MENU_TEXT_ENABLE_COLOR
  }
});
