import { inject } from 'aurelia-framework';
import { BookService } from './bookService';

@inject(BookService)
export class DataContext {
  books = [];

  constructor(bookService) {
    this.bookService = bookService;
  }

  getBooks() {
    if(!!this.books.length) {
      return Promise.resolve();
    } else {
      return this.bookService.getBooks()
        .then(response => JSON.parse(response && response.response))
        .then(response => this.books = response);
    }
  }

  getBooksByGenre(genre) {
    if(!!this.books.length) {
      // filter cached array by genre & return
      let filteredArray = this.books.filter(book => {
        return book.genre.toLowerCase() === genre.toLowerCase();
      });

      return Promise.resolve(filteredArray);
    } else {
      // or I could do a getBooks() then filter as above so they're cached
      return this.bookService.getBooksByGenre(genre);
    }
  }
}
