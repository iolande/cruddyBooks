export function configure(aurelia) {
  aurelia.globalResources('./forms/search/search');
  aurelia.globalResources('./forms/select/select');
  aurelia.globalResources('./forms/text-input/text-input');


  aurelia.globalResources('./forms/orig-text-input/text-input');

  aurelia.globalResources('./item-list/item-list');
  aurelia.globalResources('./navigation-bar/navigation-bar');

  aurelia.globalResources('./panel/panel');
  aurelia.globalResources('./panel/panel-heading');
  aurelia.globalResources('./panel/panel-body');
  aurelia.globalResources('./panel/panel-footer');
}
