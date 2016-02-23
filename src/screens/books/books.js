import {inject} from 'aurelia-framework';
import {BookService} from '../../services/bookService';

@inject(BookService)
export class Books {
  constructor(bookService) {
    this.bookList = [];
    this.bookService = bookService;
  }

  getBooks() {
    console.log('getting');
    return this.bookService.getBooks()
      .then(response => { this.bookList = response; });
  }

  fetchBooks() {
    console.log('fetching');
    return this.bookService.fetchBooks()
      .then(response => { this.bookList = response; });
  }

  addBook(formData) {
    console.log('submitting');

    return this.bookService.postBook(formData)
      .then(response => this.bookList.push(response))
  }
}
