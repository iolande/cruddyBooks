import {bindable} from 'aurelia-framework';
import {createUniqueID} from '../../../helpers';

export class SearchInput {
  @bindable label = '';
  @bindable value = '';
  @bindable placeholder = '';
  @bindable buttonText = '';

  id = createUniqueID();
}
