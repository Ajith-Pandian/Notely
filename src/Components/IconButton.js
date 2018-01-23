import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "./Icons";

const IconButton = props => {
  let { type, onPress, style, iconStyle } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={{ ...style }}>
      <Icon name={type} {...iconStyle} />
    </TouchableOpacity>
  );
};
IconButton.FILTER = "filter-list";
IconButton.FAVORITE = "favorite";
IconButton.STAR = "star-rate";
IconButton.DONE = "done";
IconButton.CLOSE = "close";
IconButton.ADD = "add";
export default IconButton;
