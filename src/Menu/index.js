import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { MENU_BG_COLOR } from "../Constants";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import {
  filterFavoriteNotes,
  filterStarredNotes,
  filterPoemNotes,
  filterStoryNotes,
  removeFilters,
  applyFilters
} from "../Store/Actions/NotesActions";
import { changeMenuVisible } from "../Store/Actions/AppActions";

class Menu extends Component {
  state = {
    isFavorite: false,
    isHearted: false,
    isPoem: false,
    isStory: false
  };
  render() {
    let { dispatch } = this.props;
    let { isFavorite, isHearted, isPoem, isStory } = this.state;
    return (
      <View style={styles.sContainer}>
        <MenuHeader />
        <MenuItem
          type={MenuItem.HEARTED}
          onSelect={isFavorite => this.setState({ isFavorite })}
        />
        <MenuItem
          type={MenuItem.FAVORITE}
          onSelect={isHearted => this.setState({ isHearted })}
        />
        <MenuItem
          type={MenuItem.POEMS}
          onSelect={isPoem => this.setState({ isPoem })}
        />
        <MenuItem
          type={MenuItem.STORY}
          onSelect={isStory => this.setState({ isStory })}
        />
        <MenuFooter
          onApplyPress={() => {
            dispatch(applyFilters(this.state));
            dispatch(changeMenuVisible(false));
          }}
        />
      </View>
    );
  }
}

export default connect()(Menu);

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: MENU_BG_COLOR
  }
});
