import {
  ADD_NOTE,
  REMOVE_NOTE,
  STAR_NOTE,
  FAVORITE_NOTE
} from "../StoreConstants";
import Notes from "../../Models/Notes";

export const createNote = note => dispatch => dispatch(_createNote(note));
export const deleteNote = id => dispatch => dispatch(_deleteNote(id));
export const starNote = id => dispatch => dispatch(_starNote(id));
export const favoriteNote = id => dispatch => dispatch(_favoriteNote(id));

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
function _starNote(id) {
  return {
    type: STAR_NOTE,
    id
  };
}
function _favoriteNote(id) {
  return {
    type: FAVORITE_NOTE,
    id
  };
}
