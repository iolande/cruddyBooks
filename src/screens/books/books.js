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
    // Load up the data needed for this screen to be ready
    return this.dataContext.getBooks()
      .then(response => {
        this.books = this.dataContext.books;
      });
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  addBook(formData) {
    return this.dataContext.saveBook(formData);
  }
}
