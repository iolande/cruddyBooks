export class Book {
  title = ''
  author = ''
  genre = ''
  read = false

  update(newValues = {
    title: '',
    author: '',
    genre: '',
    read: false
  }) {
    this.title = newValues.title ? newValues.title : '';
    this.author = newValues.author ? newValues.author : '';
    this.genre = newValues.genre ? newValues.genre : '';
    this.read = newValues.read ? newValues.read : false;
  }

  clear() {
    this.update();
  }
}
