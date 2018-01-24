import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HEADER_HEIGHT, HEADER_BG_COLOR } from "../Constants";
import IconButton from "../Components/IconButton";

export default class Header extends Component {
  render() {
    let { sHeaderContainer, sHeaderText } = styles;
    let { onAddPress, onFilterPress, hasFilter } = this.props;
    return (
      <View style={sHeaderContainer}>
        <Text style={sHeaderText}>Notely</Text>
        <View style={{ flexDirection: "row" }}>
          <IconButton
            style={{ paddingHorizontal: 5, marginHorizontal: 5 }}
            iconStyle={{ color: "black" }}
            type={IconButton.ADD}
            onPress={() => onAddPress()}
          />
          <IconButton
            style={{ paddingHorizontal: 5, marginHorizontal: 5 }}
            iconStyle={{ color: "black" }}
            type={IconButton.FILTER}
            onPress={() => onFilterPress()}
            hasBadge={hasFilter}
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
