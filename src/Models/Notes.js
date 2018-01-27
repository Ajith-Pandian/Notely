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
    this.time = new Date(time);
    this.isFavorite = isFavorite;
    this.isHearted = isHearted;
    this.isPoem = isPoem;
    this.isStory = isStory;
  }
}
