import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";
export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.sContainer}>
          <Text style={styles.sWelcome}>Welcome to Notely!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  sWelcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
