import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import NotesList from "./NotesList";
import Button from "../Components/Button";
import { ITEM_PADDING, MENU_TEXT_ENABLE_COLOR } from "../Constants";
import {
  heartNote,
  favoriteNote,
  deleteNote
} from "../Store/Actions/NotesActions";

const Placeholder = ({ isFiltered, navigation }) => (
  <View style={styles.sPlaceholderContainer}>
    <Text style={styles.sPlaceholderText}>
      {isFiltered ? "No notes found. Try other filters" : "No notes"}
    </Text>
    {!isFiltered ? (
      <Button
        text={"CREATE NOTE"}
        onPress={() => navigation.navigate("Details", { isNew: true })}
        style={styles.sPlaceholderButton}
        textStyle={{ color: "white" }}
      />
    ) : null}
  </View>
);

const Home = props => {
  let {
    onAddPress,
    onFilterPress,
    notes,
    filteredNotes,
    filters,
    navigation,
    isFiltered,
    _heartNote,
    _favoriteNote,
    _deleteNote
  } = props;
  let { isFavorite, isHearted, isPoem, isStory } = filters;

  notes = notes.filter(
    note =>
      (isFavorite ? note.isFavorite : note) &&
      (isHearted ? note.isHearted : note) &&
      (isPoem ? note.isPoem : note) &&
      (isStory ? note.isStory : note)
  );

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
          <Placeholder isFiltered={isFiltered} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = ({ NotesReducer }) => {
  let { notes, filteredNotes, filters, isFiltered } = NotesReducer;
  return {
    notes,
    filteredNotes,
    filters,
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
  },
  sPlaceholderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  sPlaceholderText: {
    fontSize: 20,
    fontFamily: "Abril Fatface"
  },
  sPlaceholderButton: {
    marginHorizontal: ITEM_PADDING,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: MENU_TEXT_ENABLE_COLOR
  }
});
