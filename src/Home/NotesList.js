import React from "react";
import { View, ListView, StyleSheet, Text } from "react-native";
import NoteItem from "./NoteItem";
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

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(["1", "2", "3", "4", "5", "6"])
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        dataSource={this.state.dataSource}
        renderRow={data => <NoteItem />}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={styles.separator} />
        )}
      />
    );
  }
}

export default ListViewDemo;
