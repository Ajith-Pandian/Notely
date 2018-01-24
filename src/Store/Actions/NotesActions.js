import {
  ADD_NOTE,
  REMOVE_NOTE,
  HEART_NOTE,
  FAVORITE_NOTE,
  CHANGE_FILTERS,
  APPLY_FILTERS
} from "../StoreConstants";
import Notes from "../../Models/Notes";

export const createNote = note => dispatch => dispatch(_createNote(note));

export const deleteNote = id => dispatch => dispatch(_deleteNote(id));

export const heartNote = (id, isHearted) => {
  return (dispatch, getState) => {
    dispatch(_heartNote(id, isHearted));
    let { isFiltered, filters } = getState().NotesReducer;
    isFiltered ? dispatch(_applyFilters(filters)) : null;
  };
};

export const favoriteNote = (id, isFavorite) => {
  return (dispatch, getState) => {
    dispatch(_favoriteNote(id, isFavorite));
    let { isFiltered, filters } = getState().NotesReducer;
    isFiltered ? dispatch(_applyFilters(filters)) : null;
  };
};

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

function _changeFilters(filters) {
  return {
    type: CHANGE_FILTERS,
    filters
  };
}

function _applyFilters(filters) {
  return {
    type: APPLY_FILTERS,
    filters
  };
}
