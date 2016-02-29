import { bindable } from 'aurelia-framework';

export class BookFields {
  @bindable book = {
    title: '',
    author: '',
    genre: '',
    read: false
  };
}
