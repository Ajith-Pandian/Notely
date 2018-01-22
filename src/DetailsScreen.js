import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.sContainer}>
        <Text style={styles.sWelcome}>Welcome to Notely!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  sWelcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
