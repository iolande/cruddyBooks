import {bindable} from 'aurelia-framework';

export class SelectInput {
  @bindable id = '';
  @bindable label = '';
  @bindable options = [];
  @bindable description = '';
}
