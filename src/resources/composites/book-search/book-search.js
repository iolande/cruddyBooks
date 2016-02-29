import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { BookService } from '../../../services/bookService';

@inject(BookService, EventAggregator)
export class BookSearch {
  searchTerm = '';
  bookList = [];

  constructor(bookService, eventAggregator) {
    this.bookService = bookService;
    this.eventAggregator = eventAggregator;
  }

  doSearchByGenre() {
    return this.bookService.getBooksByGenre(this.searchTerm)
      .then(response => { this.bookList = response; });
  }

  selectBook(book) {
    this.eventAggregator.publish('select:book', book);
  }
}
