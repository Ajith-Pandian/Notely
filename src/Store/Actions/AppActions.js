import { MENU_VISIBLE } from "../StoreConstants";

export const changeMenuVisible = menuVisible => dispatch =>
  dispatch(_changeMenuVisible(menuVisible));

function _changeMenuVisible(menuVisible) {
  return {
    type: MENU_VISIBLE,
    menuVisible
  };
}
