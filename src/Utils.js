import data from "./data";
import Note from "./Models/Notes";
import moment from "moment";
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
