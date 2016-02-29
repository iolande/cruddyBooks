import {bindable} from 'aurelia-framework';

export class OrigTextInput {
  @bindable fieldData = {};
  @bindable fieldValue = '';
  // init with a value or aurelia's binding will set the value, raising a change event

  fieldValueChanged() {
    // append 'Changed' to the propertyName and aurelia
    // has automatically created an event listener so you can create a
    // method with that name & it's triggered by the change event

    // change event is raised immediately so probably want to use the
    // throttle or debounce binding. I like updateTrigger:'blur'
    // https://www.danyow.net/aurelia-binding-behaviors/
    console.log('my field value changed!');
  }
}
