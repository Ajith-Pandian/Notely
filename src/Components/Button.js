import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "./Icons";
import { MENU_TEXT_ENABLE_COLOR, HEADER_BG_COLOR } from "../Constants";

const Button = props => {
  let { onPress, style, text } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={{ margin: 5, ...style }}>
      <Text style={{ fontSize: 18 }}>{text || "Button"}</Text>
    </TouchableOpacity>
  );
};
export default Button;
