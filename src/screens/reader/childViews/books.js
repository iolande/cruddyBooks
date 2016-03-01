import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Book } from '../../../models/book';

@inject(EventAggregator)
export class Books {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.selectedBook = new Book();
  }

  attached() {
    this.eventAggregator.subscribe('select:book', book => this.selectedBook.setProperties(book));
  }
}
