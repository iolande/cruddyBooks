export function configure(aurelia) {
  aurelia.globalResources('./forms/book-finder/book-finder');
  aurelia.globalResources('./forms/checkbox/checkbox');
  aurelia.globalResources('./forms/field-message/field-message');
  aurelia.globalResources('./forms/search-input/search-input');
  aurelia.globalResources('./forms/text-input/text-input');

  aurelia.globalResources('./contrived-book-finder/contrived-book-finder');
  aurelia.globalResources('./navigation-bar/navigation-bar');

  aurelia.globalResources('./panel/panel');
  aurelia.globalResources('./panel/panel-heading');
  aurelia.globalResources('./panel/panel-body');
  aurelia.globalResources('./panel/panel-footer');
}
