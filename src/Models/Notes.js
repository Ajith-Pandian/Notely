export default class Notes {
  constructor(
    id,
    title,
    description,
    time = new Date(),
    isFavorite = false,
    isHearted = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.time = time;
    this.isFavorite = isFavorite;
    this.isHearted = isHearted;
  }
}
