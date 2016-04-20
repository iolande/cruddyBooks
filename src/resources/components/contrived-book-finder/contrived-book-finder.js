import {inject, bindable} from 'aurelia-framework';
import {DataContext} from '../../../services/dataContext';

@inject(DataContext)
export class ContrivedBookFinder {
  @bindable selectedBook;
  @bindable heading;

  booksFilteredByGenre = null;
  workingBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  searchByGenre() {
    return this.dataContext.getBooksByGenre(this.searchTerm)
      .then(response => this.booksFilteredByGenre = response);
  }
}
