import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import SwipeList from "./SwipeList";
import NotesList from "./NotesList";
import { heartNote, favoriteNote } from "../Store/Actions/NotesActions";

class Home extends Component {
  render() {
    let {
      onAddPress,
      onFilterPress,
      notes,
      navigation,
      isFiltered,
      _heartNote,
      _favoriteNote
    } = this.props;

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
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ NotesReducer }) => {
  let { notes, isFiltered } = NotesReducer;
  return {
    notes,
    isFiltered
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  _heartNote: (id, isHearted) => dispatch(heartNote(id, isHearted)),
  _favoriteNote: (id, isFavorite) => dispatch(favoriteNote(id, isFavorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    backgroundColor: "white"
  }
});
