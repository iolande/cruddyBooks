import { TemplatingEngine, Container, BindingEngine } from 'aurelia-framework';
import { MockHttpClient } from '../../../../_helpers/aurelia/mockHttpClient';

import { BookFinder } from '../../../../../../src/resources/components/forms/book-finder/book-finder';

xdescribe('BookFinder', () => {
  let sandbox;
  let container;
  let bindingEngine;
  let templateEngine;

  let bookFinder;

  beforeEach(() => {
    container = new Container();
    container.registerInstance('HttpClient', MockHttpClient);
    templateEngine = container.get(TemplatingEngine);
    bindingEngine = container.get(BindingEngine);

    bookFinder = templateEngine.createViewModelForUnitTest(BookFinder);
  });

  afterEach(() => {
    container = null;
    bindingEngine = null;
    templateEngine = null;
    bookFinder = null;
  });

  it('should be initialized', done => {
    expect(bookFinder).not.toBe(null);
    expect(bookFinder).not.toBe(undefined);
    done();
  });
});
