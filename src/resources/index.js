export function configure(aurelia) {
  aurelia.globalResources('./components/forms/book-finder/book-finder');
  aurelia.globalResources('./components/forms/checkbox/checkbox');
  aurelia.globalResources('./components/forms/field-message/field-message');
  aurelia.globalResources('./components/forms/search-input/search-input');
  aurelia.globalResources('./components/forms/text-input/text-input');

  aurelia.globalResources('./components/contrived-book-finder/contrived-book-finder');
  aurelia.globalResources('./components/navigation-bar/navigation-bar');

  aurelia.globalResources('./components/panel/panel');
  aurelia.globalResources('./components/panel/panel-heading');
  aurelia.globalResources('./components/panel/panel-body');
  aurelia.globalResources('./components/panel/panel-footer');

  aurelia.globalResources('./converters/null-to-empty-string');
  aurelia.globalResources('./converters/three-field-date');
}
