import {bindable} from 'aurelia-framework';
import {createUniqueID} from '../../../helpers';

export class SearchInput {
  @bindable label = '';
  @bindable value = null;
  @bindable placeholder = '';
  @bindable buttonText = '';
  @bindable fieldMessageInfo = {};

  id = createUniqueID();

  valueChanged() {
    this.fieldMessageInfo = {};
  }
}
