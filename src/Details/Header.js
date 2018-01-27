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

export default class Header extends Component {
  render() {
    let { sHeaderContainer, sHeaderText } = styles;
    let {
      onBackPress,
      onEditPress,
      onSavePress,
      onCancelPress,
      hasFilter,
      title,
      headerStyle,
      isEdit
    } = this.props;
    return (
      <View style={{ backgroundColor: HEADER_BG_COLOR }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10
          }}
        >
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
          <Text
            style={{
              marginHorizontal: 3 * ITEM_PADDING,
              paddingBottom: 10,
              fontSize: HEADER_FONT_SIZE,
              color: "black",
              fontFamily: "Abril Fatface"
            }}
            numberOfLines={3}
          >
            {title || "New Note"}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
