import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
initialize();

beforeEach(() => {
  this.sinon = sinon.sandbox.create();
});

afterEach(() => {
  this.sinon.restore();
});
