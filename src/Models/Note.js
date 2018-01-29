import moment from "moment";

export default class Notes {
  constructor(
    id,
    title,
    description,
    time = new Date(),
    isFavorite = false,
    isHearted = false,
    isPoem = false,
    isStory = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    //time is type of "string" in data.js & type of "Date" while creating a Note
    this.time =
      typeof stringValue === "string"
        ? moment(time, "ddd MMM DD YYYY HH:mm:ss Z")
        : moment(time);
    this.isFavorite = isFavorite;
    this.isHearted = isHearted;
    this.isPoem = isPoem;
    this.isStory = isStory;
  }
}
