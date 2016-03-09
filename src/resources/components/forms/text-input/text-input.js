import {bindable} from 'aurelia-framework';

export class TextInput {
  @bindable label = '';
  @bindable id = '';
  @bindable value = '';
  @bindable maxLength = 30;
}
