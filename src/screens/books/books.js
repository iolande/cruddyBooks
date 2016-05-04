import {inject} from 'aurelia-framework';
import {DataContext} from '../../services/dataContext';
import {Book as CurrentBook} from '../../models/book';

@inject(DataContext, CurrentBook)
export class Books {
  books = null;
  currentBook = null;

  constructor(dataContext, currentBook) {
    this.dataContext = dataContext;
    this.currentBook = currentBook;
  }

  activate() {
    return this.dataContext.getBooks()
      .then(response => this.books = response);
      // .catch(console.log.bind(console)); // What does this do, exactly? #3 in this article https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  }

  saveCurrentBook() {
    // console.log(this.currentBook);
    // return this.dataContext.saveBook(this.currentBook);
  }

  addBook(formData) {
    return this.dataContext.saveBook(formData);
    // then display a message to the user?
  }
}
