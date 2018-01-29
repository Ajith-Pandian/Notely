import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import moment from "moment";
import {
  DESCRIPTION_COLOR,
  GRAY,
  HEART_COLOR,
  FAV_COLOR,
  ITEM_PADDING,
  ITEM_LAYOUT_HEIGHT,
  ITEM_TITLE_SIZE,
  ITEM_DESC_SIZE,
  ITEM_TIME_SIZE
} from "../Constants";
import IconButton from "../Components/IconButton";

const NoteItem = ({ note, onStarPress, onFavPress, onItemPress }) => {
  let { sContainer, sTitle, sDescription, sTime, sActionLayout } = styles;
  let { title, description, time, isFavorite, isHearted } = note;
  return (
    <TouchableOpacity onPress={() => onItemPress()} style={sContainer}>
      <View style={{ flex: 4 }}>
        <Text maxLength={20} numberOfLines={1} style={sTitle}>
          {title}
        </Text>
        <Text numberOfLines={1} style={sDescription}>
          {description}
        </Text>
        <Text style={sTime}>{moment(time).calendar()}</Text>
      </View>
      <View style={sActionLayout}>
        <IconButton
          type={IconButton.HEART}
          style={{ marginHorizontal: 6 }}
          iconStyle={{ color: isHearted ? HEART_COLOR : GRAY }}
          onPress={() => onStarPress(!isHearted)}
        />
        <IconButton
          type={IconButton.FAVORITE}
          style={{ marginHorizontal: 6 }}
          iconStyle={{ color: isFavorite ? FAV_COLOR : GRAY }}
          onPress={() => onFavPress(!isFavorite)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  sContainer: {
    height: ITEM_LAYOUT_HEIGHT,
    paddingHorizontal: ITEM_PADDING,
    paddingVertical: ITEM_PADDING,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  sTitle: {
    fontSize: ITEM_TITLE_SIZE,
    color: "black"
  },
  sDescription: {
    marginTop: 5,
    fontSize: ITEM_DESC_SIZE,
    color: DESCRIPTION_COLOR
  },
  sTime: {
    marginTop: 5,
    fontSize: ITEM_TIME_SIZE,
    color: GRAY
  },
  sActionLayout: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center"
  }
});
