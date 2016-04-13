import { HttpClient } from 'aurelia-http-client';
import {isPromise} from 'test/unit/_helpers/helpers';

import {BookService} from 'src/services/bookService';

import {initialize} from 'aurelia-pal-browser';
initialize();

xdescribe('TestBookService', () => {
  let testee;
  let sandbox;
  let fakeInterceptor;

  class FakeInterceptor {
    messageCopy = null;
    request(message) {
      this.messageCopy = message;
      return message;
    }
  }

  beforeEach(() => {
    fakeInterceptor = new FakeInterceptor();
    testee = new BookService(new HttpClient(), fakeInterceptor);
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    testee = null;
    fakeInterceptor = null;
    sandbox.restore();
  });

  it('should call the API with the correct Content-Type header', done => {
    let requestMessage;
    let server = sinon.fakeServer.create();
    let okResponse = [
      200,
      { 'Content-type': 'application/json' },
      '{"hello":"world"}'
    ];

    server.respondWith('GET', 'http://localhost:8000/api/books', okResponse);

    testee.getBooks();

    setTimeout(function() {
      requestMessage = fakeInterceptor.messageCopy;

      expect(requestMessage.headers.headers['Content-Type']).toBe('application/json');
      done();
    }, 1);

    server.respond();
    server.restore();
  });
});
