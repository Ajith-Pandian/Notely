import {
  ADD_NOTE,
  REMOVE_NOTE,
  HEART_NOTE,
  FAVORITE_NOTE,
  APPLY_FILTERS
} from "../StoreConstants";
import Notes from "../../Models/Notes";

export const createNote = note => dispatch => dispatch(_createNote(note));

export const deleteNote = id => dispatch => dispatch(_deleteNote(id));

export const heartNote = (id, isHearted) => dispatch =>
  dispatch(_heartNote(id, isHearted));

export const favoriteNote = (id, isFavorite) => dispatch =>
  dispatch(_favoriteNote(id, isFavorite));

export const applyFilters = filters => dispatch =>
  dispatch(_applyFilters(filters));

function _createNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}

function _deleteNote(id) {
  return {
    type: REMOVE_NOTE,
    id
  };
}
function _heartNote(id, isHearted) {
  return {
    type: HEART_NOTE,
    id,
    isHearted
  };
}
function _favoriteNote(id, isFavorite) {
  return {
    type: FAVORITE_NOTE,
    id,
    isFavorite
  };
}

function _applyFilters(filters) {
  return {
    type: APPLY_FILTERS,
    filters
  };
}
