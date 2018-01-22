import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HEADER_BG_COLOR } from "./Constants";
import { FilterIcon } from "./Icons";
export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    let { sHeaderContainer, sHeaderText } = styles;
    return (
      <View style={sHeaderContainer}>
        <Text style={sHeaderText}>Notely</Text>
        <FilterIcon color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sHeaderContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: HEADER_BG_COLOR
  },
  sHeaderText: { fontSize: 25, fontWeight: "bold", color: "black" }
});
