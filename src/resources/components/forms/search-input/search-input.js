import {bindable} from 'aurelia-framework';

export class SearchInput {
  @bindable label = '';
  @bindable id = '';
  @bindable value = '';
  @bindable placeholder = '';
  @bindable buttonText = '';
}
