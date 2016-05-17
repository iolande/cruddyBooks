import {bindable} from 'aurelia-framework';
import {createUniqueID} from '../../helpers';

export class ThreeFieldDateInput {
  @bindable legend = '';
  @bindable value = null;
  @bindable fieldMessageInfo = {};

  dayId = createUniqueID();
  monthId = createUniqueID();
  yearId = createUniqueID();

  valueChanged() {
    this.fieldMessageInfo = {};
  }
}
