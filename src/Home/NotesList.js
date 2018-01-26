import React, { Component } from "react";
import { View, ListView, StyleSheet, Text } from "react-native";
import Swipeout from "react-native-swipeout";

import NoteItem from "./NoteItem";
import Icon from "../Components/Icons";
import { DELETE_BUTTON_WIDTH, DELETE_BG_COLOR } from "../Constants";

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const DeleteButton = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Icon name={Icon.DELETE} color={"white"} />
    <Text style={{ color: "white" }}>Delete</Text>
  </View>
);
export default class NotesList extends Component {
  render() {
    let {
      notes,
      navigation,
      onItemStarPress,
      onItemFavoritePress,
      onItemDelete
    } = this.props;
    let dataSource = ds.cloneWithRows(this.props.notes);
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        dataSource={dataSource}
        renderRow={note => (
          <Swipeout
            right={[
              {
                text: "Delete",
                backgroundColor: DELETE_BG_COLOR,
                underlayColor: "rgba(0, 0, 0, 1, 0.6)",
                onPress: () => onItemDelete(note.id),
                component: <DeleteButton />
              }
            ]}
            autoClose
            backgroundColor="transparent"
            buttonWidth={DELETE_BUTTON_WIDTH}
          >
            <NoteItem
              note={note}
              onItemPress={() => navigation.navigate("Details", { note })}
              onStarPress={isHearted => onItemStarPress(note.id, isHearted)}
              onFavPress={isFavorite =>
                onItemFavoritePress(note.id, isFavorite)
              }
            />
          </Swipeout>
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
