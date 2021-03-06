import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

import { GRAY1 as DEFAULT, ICON_SIZE } from "../Constants";

const BaseIcon = props => {
  let { name, size = ICON_SIZE, color = DEFAULT, ...otherProps } = props;
  return <MaterialIcon name={name} size={size} color={color} {...otherProps} />;
};

const Icon = props => {
  let { type, ...otherProps } = props;
  return <BaseIcon name={type} {...otherProps} />;
};

export default Icon;

Icon.FILTER = "filter-list";
Icon.FAVORITE = "favorite";
Icon.HEART = "star-rate";
Icon.DONE = "done";
Icon.CLOSE = "close";
Icon.ADD = "add";
Icon.BACK = "arrow-back";
Icon.DELETE = "delete";
