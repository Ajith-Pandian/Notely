import {
  ADD_NOTE,
  REMOVE_NOTE,
  STAR_NOTE,
  FAVORITE_NOTE
} from "../StoreConstants";
import Notes from "../../Models/Notes";
//import { getSortedList } from "../../Utils";

import update from "immutability-helper";

const initialState = {
  notes: []
};

export default function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.note]
      };
    }
    case STAR_NOTE: {
      let { id, isStarred } = action;
      let index = state.notes.findIndex(item => item.id === id);
      return update(state, {
        notes: {
          [index]: {
            isStarred: { $set: isStarred }
          }
        }
      });
    }
    case FAVORITE_NOTE: {
      let { id, isFavorite } = action;
      let index = state.notes.findIndex(item => item.id === id);
      return update(state, {
        notes: {
          [index]: {
            isFavorite: { $set: isFavorite }
          }
        }
      });
    }
    case REMOVE_NOTE: {
      let { id } = action;
      let index = state.notes.findIndex(item => item.id === id);
      return update(state, { notes: { $splice: [[index, 1]] } });
    }
    default:
      return state;
  }
}
