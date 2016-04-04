import { Container } from 'aurelia-framework';
import { MockHttpClient } from 'test/unit/_helpers/aurelia/mockHttpClient';
import {isPromise} from 'test/unit/_helpers/helpers';

import {BookService} from 'src/services/bookService';

xdescribe('TestBookService', () => {
  let testee;
  let sandbox;
  let container;

  beforeEach(() => {
    // container = new Container();
    // container.registerInstance('HttpClient', MockHttpClient);

    testee = new BookService(new MockHttpClient());
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    // container = null;
    testee = null;
    sandbox.restore();
  });

  describe('constructor', () => {
    it('should define core properties', () => {
      expect(testee.httpClient).toBeDefined();
    });
  });

  describe('getBooks', () => {
    it('should GET once from the service', () => {
      testee.httpClient.get = sandbox.stub().returns(Promise.resolve());

      testee.getBooks();

      expect(testee.httpClient.get.called).toBeTruthy();
    });

    it('should return a promise', done => {
      testee.httpClient.get = sandbox.stub().returns(Promise.resolve());
      const getBooksResponse = testee.getBooks();

      setTimeout(function() {
        expect(isPromise(getBooksResponse)).toBeTruthy();
        done();
      }, 1);
    });

    describe('success', () => {
      it('should parse the response as JSON');
      it('should call the failure callback if the response does not parse as JSON');
    });

    describe('failure', () => {
      it('should call the failure callback');
    });
  });
});
