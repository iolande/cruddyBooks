import {ValidationViewStrategy} from 'aurelia-validation';

export class CruddyValidationStrategyBase extends ValidationViewStrategy {
  constructor(containerClass = 'form-group', containerErrorClass = 'has-success', containerSuccessClass = 'has-error') {
    super();

    this.containerClass = containerClass;
    this.containerErrorClass = containerErrorClass;
    this.containerSuccessClass = containerSuccessClass;
  }

  appendUIVisuals(validationProperty, currentElement) {
    let validationContainer = currentElement;
    let appendElement = currentElement.getElementsByTagName('field-message')[0];

    if (validationProperty && validationProperty.isDirty) {
      if (validationProperty.isValid) {
        appendElement.textContent = '';
        appendElement.classList.remove(this.appendActiveClass);
        validationContainer.classList.remove(this.containerErrorClass);
        validationContainer.classList.add(this.containerSuccessClass);
      } else {
        appendElement.textContent = validationProperty.message;
        appendElement.classList.add(this.appendActiveClass);
        validationContainer.classList.add(this.containerErrorClass);
        validationContainer.classList.remove(this.containerSuccessClass);
      }
    } else {
      appendElement.textContent = '';
      appendElement.classList.remove(this.appendActiveClass);
      validationContainer.classList.remove(this.containerErrorClass);
      validationContainer.classList.remove(this.containerSuccessClass);
    }
  }

  prepareElement(validationProperty, element) {
    this.appendUIVisuals(null, element);
  }

  updateElement(validationProperty, element) {
    this.appendUIVisuals(validationProperty, element);
  }
}

export class CruddyValidationStrategy { }
CruddyValidationStrategy.Default = new CruddyValidationStrategyBase();


// Activate by adding the config to you main.js
// import {CustomValidationViewStrategy} from 'custom-validation-view-strategy.js';
// .plugin('aurelia-validation', (config) => config.useViewStrategy(CustomValidationViewStrategy.Bootstrap))

// You can easily define your own in your main.js file, e.g.
// import {CustomValidationViewStrategyBase} from 'custom-validation-view-strategy.js';
// .plugin('aurelia-validation', (config) => config.useViewStrategy(new CustomValidationViewStrategyBase('form-group', 'has-success', 'has-error', 'help-block', 'help-block-error')))
