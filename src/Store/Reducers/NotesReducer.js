import {
  ADD_NOTE,
  REMOVE_NOTE,
  HEART_NOTE,
  FAVORITE_NOTE,
  APPLY_FILTERS,
  MENU_VISIBLE
} from "../StoreConstants";
import Notes from "../../Models/Notes";
import { getDummyNotes } from "../../Utils";

import update from "immutability-helper";

const initialState = {
  notes: getDummyNotes(),
  isFiltered: false
};

export default function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.note]
      };
    }
    case HEART_NOTE: {
      let { id, isHearted } = action;
      let index = state.notes.findIndex(item => item.id === id);
      return update(state, {
        notes: {
          [index]: {
            isHearted: { $set: isHearted }
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

    case APPLY_FILTERS: {
      let { isFavorite, isHearted, isPoem, isStory } = action.filters;
      let isFiltered = isFavorite || isHearted || isPoem || isStory;
      return {
        ...state,
        notes: initialState.notes.filter(
          note =>
            (isFavorite ? note.isFavorite : note) &&
            (isHearted ? note.isHearted : note) &&
            (isPoem ? note.isPoem : note) &&
            (isStory ? note.isStory : note)
        ),
        isFiltered
      };
    }

    default:
      return state;
  }
}
