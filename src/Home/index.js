import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";
import SwipeList from "./SwipeList";
import NotesList from "./NotesList";

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.sContainer}>
          <NotesList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    backgroundColor: "white"
  }
});
