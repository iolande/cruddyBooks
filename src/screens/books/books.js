import {inject} from 'aurelia-framework';
import {DataContext} from '../../services/datacontext';

@inject(DataContext)
export class Books {
  searchTerm = '';
  selectedBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  books = [];
  booksFilteredByGenre = [];

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  activate() {
    return this.dataContext.getBooks()
      .then(response => this.books = response);
  }

  doSearchByGenre() {
    return this.dataContext.getBooks({ genre: this.searchTerm })
      .then(response => this.booksFilteredByGenre = response);
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  addBook(formData) {
    console.log('submitting');

    return this.dataContext.saveBook(formData);
  }
}
