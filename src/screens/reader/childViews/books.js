import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Book } from '../../../models/book';

@inject(EventAggregator)
export class Books {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.selectedBook = new Book();

    // subscribe now or later in the lifecycle?
    this.eventAggregator.subscribe('select:book', this.selectBook.bind(this));
  }

  selectBook(book) {
    this.selectedBook.setProperties(book);
  }
}
