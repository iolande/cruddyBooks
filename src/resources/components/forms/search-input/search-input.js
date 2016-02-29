import {bindable} from 'aurelia-framework';

export class SearchInput {
  @bindable prettyName = '';
  @bindable name = '';
  @bindable value = '';
}
