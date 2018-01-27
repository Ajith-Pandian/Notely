import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import SwipeList from "./SwipeList";
import NotesList from "./NotesList";
import Button from "../Components/Button";
import {
  heartNote,
  favoriteNote,
  deleteNote
} from "../Store/Actions/NotesActions";
import { ITEM_PADDING, MENU_TEXT_ENABLE_COLOR } from "../Constants";

class Home extends Component {
  render() {
    let {
      onAddPress,
      onFilterPress,
      notes,
      filteredNotes,
      navigation,
      isFiltered,
      _heartNote,
      _favoriteNote,
      _deleteNote
    } = this.props;
    notes = isFiltered ? filteredNotes : notes;
    return (
      <View style={{ flex: 1 }}>
        <Header
          hasFilter={isFiltered}
          onAddPress={() => onAddPress()}
          onFilterPress={() => onFilterPress()}
        />
        <View style={styles.sContainer}>
          {notes && notes.length > 0 ? (
            <NotesList
              notes={notes}
              navigation={navigation}
              onItemStarPress={(itemId, isHearted) =>
                _heartNote(itemId, isHearted)
              }
              onItemFavoritePress={(itemId, isFavorite) =>
                _favoriteNote(itemId, isFavorite)
              }
              onItemDelete={itemId => _deleteNote(itemId)}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Abril Fatface" }}>
                No notes
              </Text>
              <Button
                text={"CREATE NOTE"}
                onPress={() => navigation.navigate("Details", { isNew: true })}
                style={{
                  marginHorizontal: ITEM_PADDING,
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  backgroundColor: MENU_TEXT_ENABLE_COLOR
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ NotesReducer }) => {
  let { notes, filteredNotes, isFiltered } = NotesReducer;
  return {
    notes,
    filteredNotes,
    isFiltered
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  _heartNote: (id, isHearted) => dispatch(heartNote(id, isHearted)),
  _favoriteNote: (id, isFavorite) => dispatch(favoriteNote(id, isFavorite)),
  _deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    backgroundColor: "white"
  }
});
