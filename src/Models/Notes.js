export default class Notes {
  constructor(
    id,
    title,
    description,
    time = new Date(),
    isFavorite = false,
    isStarred = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.time = time;
    this.isFavorite = isFavorite;
    this.isStarred = isStarred;
  }
}
