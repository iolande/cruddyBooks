import {ValidationViewStrategy as AureliaValidationViewStrategy} from 'aurelia-validation';

export class ValidationViewStrategyBase extends AureliaValidationViewStrategy {
  constructor(helpBlockClass) {
    super();

    // this.helpBlockClass = helpBlockClass;
  }

  appendUIVisuals(validationProperty, currentElement) {
    console.group('appendUIVisuals');
    console.log(validationProperty);
    console.log(currentElement);
    console.groupEnd();

    if (!!validationProperty) {
console.log(currentElement.isinvalid);
// debugger;
      currentElement.isinvalid = !validationProperty.isValid;

      console.log(currentElement.isinvalid);
    } else {
      currentElement.isinvalid = false;
    }
  }

  prepareElement(validationProperty, element) {
    console.group('prepareElement');
    // console.log(validationProperty);
    // console.log(element);
    console.groupEnd();
// debugger;
    // this.appendUIVisuals(null, element);
    // if(!!element){

    // element.isinvalid = false;
    // }

    // validation.result
  }

  updateElement(validationProperty, element) {
    console.group('updateElement');
    console.log(validationProperty);
    console.log(element);
    console.groupEnd();
// debugger;
    // this.appendUIVisuals(validationProperty, element);
      // element.isinvalid = !validationProperty.isValid;
// debugger;

  }
}

export class ValidationViewStrategy {}
ValidationViewStrategy.Default = new ValidationViewStrategyBase();
