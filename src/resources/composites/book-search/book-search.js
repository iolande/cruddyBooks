import {inject} from 'aurelia-framework';
import {BookService} from '../../../services/bookService';

@inject(BookService)
export class BookSearch {
  searchTerm = '';
  bookList = [];

  constructor(bookService) {
    this.bookService = bookService;
  }

  doSearchByGenre() {
    return this.bookService.getBooksByGenre(this.searchTerm)
      .then(response => { this.bookList = response; });
  }
}
