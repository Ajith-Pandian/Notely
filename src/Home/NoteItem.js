import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { DESCRIPTION_COLOR, GRAY } from "../Constants";
import IconButton from "../Components/IconButton";
const NoteItem = () => {
  let { sContainer, sTitle, sDescription, sTime, sActionLayout } = styles;
  return (
    <View style={sContainer}>
      <View style={{}}>
        <Text style={sTitle}>And then were none</Text>
        <Text style={sDescription}>
          Ten little soldier boys went out to dine
        </Text>
        <Text style={sTime}>Today at 6:30 PM</Text>
      </View>
      <View style={sActionLayout}>
        <IconButton
          type={IconButton.STAR}
          style={{ marginHorizontal: 6 }}
          onPress={() => console.log("star clicked")}
        />
        <IconButton
          type={IconButton.FAVORITE}
          style={{ marginHorizontal: 6 }}
          onPress={() => console.log("fav clicked")}
        />
      </View>
    </View>
  );
};
export default NoteItem;

const styles = StyleSheet.create({
  sContainer: {
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  sTitle: {
    fontSize: 20,
    color: "black"
  },
  sDescription: {
    marginTop: 5,
    fontSize: 16,
    color: DESCRIPTION_COLOR
  },
  sTime: {
    marginTop: 5,
    fontSize: 12,
    color: GRAY
  },
  sActionLayout: {
    margin: 5,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center"
  }
});
