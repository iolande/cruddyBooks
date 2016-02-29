export class Book {
  author = '';
  genre = '';
  read = '';
  title = '';
  id = '';

  constructor(data) {
    if(!!data) {
      this.setProperties(data);
    }
  }

  setProperties(data) {
    this.author = data.author;
    this.genre = data.genre;
    this.read = data.read;
    this.title = data.title;
    this.id = data._id;
  }
}
