import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import SideMenu from "react-native-side-menu";

import Home from "./Home";
import Menu from "../Menu";
import { MENU_WIDTH } from "../Constants";
import { changeMenuVisible } from "../Store/Actions/AppActions";

const HomeWithMenu = props => {
  let { menuVisible, navigation, _changeMenuVisible } = props;
  return (
    <SideMenu
      isOpen={menuVisible}
      menu={<Menu />}
      openMenuOffset={MENU_WIDTH}
      bounceBackOnOverdraw={false}
      disableGestures={true}
      menuPosition={"right"}
      onChange={menuVisible =>
        !menuVisible ? _changeMenuVisible(menuVisible) : null
      }
    >
      <Home
        navigation={navigation}
        onAddPress={() => navigation.navigate("Details", { isNew: true })}
        onFilterPress={() => _changeMenuVisible(true)}
      />
    </SideMenu>
  );
};

HomeWithMenu.navigationOptions = {
  header: null
};

const mapStateToProps = ({ AppStateReducer }) => {
  let { menuVisible } = AppStateReducer;
  return {
    menuVisible
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  _changeMenuVisible: menuVisible => dispatch(changeMenuVisible(menuVisible))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWithMenu);
