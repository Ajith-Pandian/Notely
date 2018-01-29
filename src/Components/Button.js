import React from "react";
import { TouchableOpacity, Text } from "react-native";

import Icon from "./Icons";
import {
  MENU_TEXT_ENABLE_COLOR,
  HEADER_BG_COLOR,
  ITEM_DESC_SIZE
} from "../Constants";

const Button = props => {
  let { onPress, style, text, textStyle } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={[{ margin: 5 }, style]}>
      <Text style={[{ fontSize: ITEM_DESC_SIZE }, textStyle]}>
        {text || "Button"}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
