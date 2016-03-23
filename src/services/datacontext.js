import {inject} from 'aurelia-framework';
import {BookService} from './bookService';

@inject(BookService)
export class DataContext {
  constructor(bookService) {
    this.bookService = bookService;
  }

  getBooks(params) {
    let promise;
    let callData = null;

    if(!!params && !!params.genre) {
      promise = 'getBooksByGenre';
      callData = params.genre;
    } else {
      promise = 'getBooks';
    }

    return this.bookService[promise](callData);
  }
}
