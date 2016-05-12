import {inject} from 'aurelia-framework';
import {DataContext} from '../../../../services/dataContext';

@inject(DataContext)
export class BookFinder {
  searchTerm = null;
  booksFilteredByGenre = [];

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  bind(ctx) {
    this.parentContext = ctx;
  }

  searchByGenre() {
    return this.dataContext.getBooksByGenre(this.searchTerm)
      .then(response => this.booksFilteredByGenre = response);
  }
}
