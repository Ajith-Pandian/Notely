import moment from "moment";
import data from "./data";
import Note from "./Models/Note";

export const getDummyNotes = () =>
  data.map(
    ({
      id,
      title,
      description,
      time,
      isFavorite,
      isHearted,
      isPoem,
      isStory
    }) =>
      new Note(
        id,
        title,
        description,
        time,
        isFavorite,
        isHearted,
        isPoem,
        isStory
      )
  );

export const sortByDate = data =>
  data.sort((a, b) => moment(b.time) - moment(a.time));

export const sortById = data =>
  data.sort((a, b) => moment(a.id) - moment(b.id));
