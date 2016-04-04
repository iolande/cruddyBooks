import {inject} from 'aurelia-framework';
import {DataContext} from '../../../../services/datacontext';

@inject(DataContext)
export class BookFinder {
  searchTerm = '';
  booksFilteredByGenre = [];

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  doSearchByGenre() {
    return this.dataContext.getBooks({ genre: this.searchTerm })
      .then(response => this.booksFilteredByGenre = response);
  }
}
