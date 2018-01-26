import {
  ADD_NOTE,
  REMOVE_NOTE,
  HEART_NOTE,
  UPDATE_TITLE_AND_DESCRIPTION,
  FAVORITE_NOTE,
  CHANGE_FILTERS,
  APPLY_FILTERS
} from "../StoreConstants";
import Notes from "../../Models/Notes";

export const createNote = note => dispatch => dispatch(_createNote(note));

export const deleteNote = id => dispatch => dispatch(_deleteNote(id));

export const updateTitleAndDescription = (id, title, description) => dispatch =>
  dispatch(_updateTitleAndDescription(id, title, description));

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
function _updateTitleAndDescription(id, title, description) {
  return {
    type: UPDATE_TITLE_AND_DESCRIPTION,
    id,
    title,
    description
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
