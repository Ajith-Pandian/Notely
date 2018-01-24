import data from "./data";
import Note from "./Models/Notes";

export const getDummyNotes = () =>
  data.map(
    ({ id, title, description, time, isFavorite, isHearted }) =>
      new Note(id, title, description, time, isFavorite, isHearted)
  );
