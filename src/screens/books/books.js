import {inject} from 'aurelia-framework';
import {DataContext} from '../../services/dataContext';

@inject(DataContext)
export class Books {
  selectedBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  books = [];

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  activate() {
    return this.dataContext.getBooks()
      .then(() => this.books = this.dataContext.books);
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  addBook(formData) {
    return this.dataContext.saveBook(formData);
  }
}
