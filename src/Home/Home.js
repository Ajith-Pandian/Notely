import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import SwipeList from "./SwipeList";
import NotesList from "./NotesList";
import {
  heartNote,
  favoriteNote,
  deleteNote
} from "../Store/Actions/NotesActions";

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
