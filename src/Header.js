import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HEADER_HEIGHT, HEADER_BG_COLOR } from "./Constants";
import IconButton from "./Components/IconButton";

export default class Header extends Component {
  render() {
    let { sHeaderContainer, sHeaderText } = styles;
    return (
      <View style={sHeaderContainer}>
        <Text style={sHeaderText}>Notely</Text>
        <View style={{ flexDirection: "row" }}>
          <IconButton
            style={{ marginHorizontal: 5 }}
            type={IconButton.ADD}
            onPress={() => console.log("Add clicked")}
          />
          <IconButton
            style={{ marginHorizontal: 5 }}
            type={IconButton.FILTER}
            onPress={() => console.log("Filter clicked")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sHeaderContainer: {
    height: HEADER_HEIGHT,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: HEADER_BG_COLOR
  },
  sHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  }
});
