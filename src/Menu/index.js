import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import { MENU_BG_COLOR } from "../Constants";
import { applyFilters } from "../Store/Actions/NotesActions";
import { changeMenuVisible } from "../Store/Actions/AppActions";

class Menu extends Component {
  constructor(props) {
    super(props);
    let { isFavorite, isHearted, isPoem, isStory } = props.filters;
    this.state = {
      isFavorite,
      isHearted,
      isPoem,
      isStory
    };
  }
  componentWillReceiveProps(nextProps) {
    let { menuVisible, filters } = nextProps;
    let { isFavorite, isHearted, isPoem, isStory } = filters;
    !menuVisible ? this.setState(filters) : null;
  }
  render() {
    let { _applyFilters, _changeMenuVisible } = this.props;
    let { isFavorite, isHearted, isPoem, isStory } = this.state;
    return (
      <View style={styles.sContainer}>
        <MenuHeader
          onClosePress={() => {
            _changeMenuVisible(false);
          }}
        />
        <MenuItem
          type={MenuItem.HEARTED}
          isSelected={isFavorite}
          onSelect={isFavorite => this.setState({ isFavorite })}
        />
        <MenuItem
          type={MenuItem.FAVORITE}
          isSelected={isHearted}
          onSelect={isHearted => this.setState({ isHearted })}
        />
        <MenuItem
          type={MenuItem.POEMS}
          isSelected={isPoem}
          onSelect={isPoem => this.setState({ isPoem })}
        />
        <MenuItem
          type={MenuItem.STORY}
          isSelected={isStory}
          onSelect={isStory => this.setState({ isStory })}
        />
        <MenuFooter
          onApplyPress={() => {
            _applyFilters(this.state);
            _changeMenuVisible(false);
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = ({ NotesReducer, AppStateReducer }) => {
  let { filters, isFiltered } = NotesReducer;
  let { menuVisible } = AppStateReducer;
  return {
    filters,
    isFiltered,
    menuVisible
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  _applyFilters: filter => dispatch(applyFilters(filter)),
  _changeMenuVisible: menuVisible => dispatch(changeMenuVisible(menuVisible))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: MENU_BG_COLOR
  }
});
