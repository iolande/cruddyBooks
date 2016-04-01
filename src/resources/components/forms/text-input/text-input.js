import {bindable} from 'aurelia-framework';
import {createUniqueID} from '../../../helpers';

export class TextInput {
  @bindable label = '';
  @bindable value = '';
  @bindable maxLength = 30;

  id = createUniqueID();
}
