import {inject} from 'aurelia-framework';
import {DataContext} from '../../services/dataContext';

@inject(DataContext)
export class Books {
  selectedBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  books = null;

  constructor(dataContext) {
    this.dataContext = dataContext;
  }

  activate() {
    return this.dataContext.getBooks()
      .then(response => this.books = response);
      // .catch(console.log.bind(console)); // What does this do, exactly? #3 in this article https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  addBook(formData) {
    return this.dataContext.saveBook(formData);
    // then display a message to the user?
  }
}
