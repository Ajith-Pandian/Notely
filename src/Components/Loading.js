import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-spinkit";

import { DELETE_BG_COLOR } from "../Constants";

const Loading = () => {
  let { container } = styles;
  return (
    <View style={container}>
      <Spinner
        style={{ margin: 5 }}
        isVisible={true}
        size={45}
        type={"FoldingCube"}
        color={DELETE_BG_COLOR}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
