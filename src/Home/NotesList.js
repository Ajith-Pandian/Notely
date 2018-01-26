import React, { Component } from "react";
import { View, ListView, StyleSheet, Text } from "react-native";

import NoteItem from "./NoteItem";

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class NotesList extends Component {
  render() {
    let {
      notes,
      navigation,
      onItemStarPress,
      onItemFavoritePress
    } = this.props;
    let dataSource = ds.cloneWithRows(this.props.notes);

    return (
      <ListView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        dataSource={dataSource}
        renderRow={note => (
          <NoteItem
            note={note}
            onItemPress={() => navigation.navigate("Details", { note })}
            onStarPress={isHearted => onItemStarPress(data.id, isHearted)}
            onFavPress={isFavorite => onItemFavoritePress(data.id, isFavorite)}
          />
        )}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={styles.separator} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {},
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});
