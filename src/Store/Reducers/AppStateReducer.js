import { MENU_VISIBLE } from "../StoreConstants";

const initialState = {
  menuVisible: false
};

export default function AppStateReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_VISIBLE: {
      let { menuVisible } = action;
      return {
        ...state,
        menuVisible
      };
    }
    default:
      return state;
  }
}
