import { inject } from 'aurelia-framework';
import { BookService } from './bookService';

@inject(BookService)
export class DataContext {
  books = [];

  constructor(bookService) {
    this.bookService = bookService;
  }

  getBooks() {
    if(this.books.length > 0) {
      return Promise.resolve(this.books);
    }

    return this.bookService.getBooks()
      .then(response => this.books = response);
  }

  getBooksByGenre(genre) {
    if(this.books.length > 0) {
      // filter cached array by genre & return
      let filteredArray = this.books.filter(book => {
        return book.genre.toLowerCase() === genre.toLowerCase();
      });

      return Promise.resolve(filteredArray);
    }

    // or I could do a getBooks() then filter as above so they're cached
    return this.bookService.getBooksByGenre(genre);
  }
}
