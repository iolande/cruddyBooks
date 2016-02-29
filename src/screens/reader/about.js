import {inject} from 'aurelia-framework';
import {BookService} from '../../services/bookService';

@inject(BookService)
export class About {
  constructor(bookService) {

  }
}
