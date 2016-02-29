import {bindable} from 'aurelia-framework';

export class TextInput {
  @bindable prettyName = '';
  @bindable name = '';
  @bindable value = '';
  @bindable maxLength = 30;
}
