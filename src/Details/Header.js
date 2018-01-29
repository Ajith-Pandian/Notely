import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Platform } from "react-native";

import {
  HEADER_HEIGHT,
  HEADER_BG_COLOR,
  HEADER_FONT_SIZE,
  ITEM_PADDING
} from "../Constants";
import IconButton from "../Components/IconButton";
import Button from "../Components/Button";

const Header = props => {
  let {
    onBackPress,
    onEditPress,
    onSavePress,
    onCancelPress,
    hasFilter,
    title,
    headerStyle,
    isEdit
  } = props;
  let { sHeaderContainer, sHeaderTitle } = styles;

  return (
    <View style={{ backgroundColor: HEADER_BG_COLOR }}>
      <View style={sHeaderContainer}>
        <IconButton
          style={{ paddingHorizontal: ITEM_PADDING }}
          iconStyle={{ color: "black" }}
          type={IconButton.BACK}
          onPress={() => onBackPress()}
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            text={isEdit ? "SAVE" : "EDIT"}
            onPress={() => (isEdit ? onSavePress() : onEditPress())}
            style={{ marginHorizontal: ITEM_PADDING }}
          />
          {isEdit ? (
            <Button
              text={"CANCEL"}
              onPress={() => onCancelPress()}
              style={{ marginHorizontal: ITEM_PADDING }}
            />
          ) : null}
        </View>
      </View>
      {!isEdit ? (
        <Text style={sHeaderTitle} numberOfLines={3}>
          {title || "New Note"}
        </Text>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  sHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  sHeaderTitle: {
    marginHorizontal: 3 * ITEM_PADDING,
    paddingBottom: 10,
    fontSize: HEADER_FONT_SIZE,
    color: "black",
    fontFamily: "Abril Fatface"
  }
});
