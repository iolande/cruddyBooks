import {inject, bindable} from 'aurelia-framework';
import {DataContext} from '../../../services/dataContext';
import {Book as WorkingBook} from '../../../models/book';

@inject(DataContext, WorkingBook)
export class ContrivedBookFinder {
  @bindable selectedBook;
  @bindable heading;

  booksFilteredByGenre = null;
  workingBook = {
    title: null,
    author: null,
    genre: null,
    read: false
  };

  constructor(dataContext, workingBook) {
    this.dataContext = dataContext;
    this.workingBook = workingBook;
  }

  setWorkingBook(book) {
    this.workingBook.update(book);
  }

  selectBook() {
    this.selectedBook.update(this.workingBook);
  }

  searchByGenre() {
    return this.dataContext.getBooksByGenre(this.searchTerm)
      .then(response => this.booksFilteredByGenre = response);
  }
}
