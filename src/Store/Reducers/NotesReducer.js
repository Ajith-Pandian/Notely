import update from "immutability-helper";

import {
  ADD_NOTE,
  REMOVE_NOTE,
  HEART_NOTE,
  FAVORITE_NOTE,
  UPDATE_TITLE_AND_DESCRIPTION,
  APPLY_FILTERS
} from "../StoreConstants";

import Note from "../../Models/Note";
import { getDummyNotes, sortById } from "../../Utils";

const initialFilterState = {
  isFavorite: false,
  isHearted: false,
  isPoem: false,
  isStory: false
};

const initialState = {
  notes: getDummyNotes(),
  isFiltered: false,
  filters: initialFilterState
};

export default function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      let { title, description } = action.note;
      let notes = sortById(state.notes);
      let id = notes[notes.length - 1].id + 1;
      let note = new Note(id, title, description);
      return {
        ...state,
        notes: [...state.notes, note]
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
    case UPDATE_TITLE_AND_DESCRIPTION: {
      let { id, title, description } = action;
      let index = state.notes.findIndex(item => item.id === id);
      return update(state, {
        notes: {
          [index]: {
            title: { $set: title },
            description: { $set: description }
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
      let filters = { isFavorite, isHearted, isPoem, isStory };
      return {
        ...state,
        isFiltered,
        filters
      };
    }
    default:
      return state;
  }
}
