import { HttpClient } from 'aurelia-http-client'
import { BookService } from 'src/services/bookService';

class MockInterceptor {
  message = null;

  request(message) {
    this.message = message;
    return message;
  }
}

describe('BookService', () => {
  let sut;
  let mockInterceptor;
  let sandbox;

  beforeEach(() => {
    mockInterceptor = new MockInterceptor();
    sut = new BookService(new HttpClient(), mockInterceptor);
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sut = null;
    mockInterceptor = null;
    sandbox.restore();
  });

  describe('constructor', () => {
    it('should define core properties', () => {
      expect(sut.httpClient).toBeDefined();
    });
  });

  describe('getBooks', () => {
    it('should GET once from the service', () => {
      sut.httpClient.get = sandbox.stub().returns(Promise.resolve());

      sut.getBooks();

      expect(sut.httpClient.get.calledOnce).toBeTruthy();
    });

    it('should return the httpClient call', () => {
      sut.httpClient.get = sandbox.stub().returnsThis();

      let testResponse = sut.getBooks();

      expect(testResponse).toEqual(sut.httpClient.get());
    });
  });

  describe('postBook', () => {
    it('should POST once to the service', () => {
      sut.httpClient.send = sandbox.stub();

      sut.postBook();

      expect(sut.httpClient.send.calledOnce).toBeTruthy();
    });

    it('should POST the correct data to the service', done => {
      let bookData = { title: 'blah', author: 'someone' };
      let testRequestMessage;
      let server = sinon.fakeServer.create();
      let okResponse = [
        200,
        { 'Content-type': 'application/json' },
        '{"hello":"world"}'
      ];

      server.respondWith('POST', 'http://localhost:8000/api/books', okResponse);

      sut.postBook(bookData);

      setTimeout(() => {
        testRequestMessage = mockInterceptor.message;

        expect(testRequestMessage.content).toEqual(JSON.stringify(bookData));
        expect(testRequestMessage.baseUrl).toEqual('http://localhost:8000/api/');
        expect(testRequestMessage.url).toEqual('books');
        expect(testRequestMessage.headers.headers['Content-Type']).toEqual('application/json');
        expect(testRequestMessage.responseType).toEqual('json');
        done();
      }, 1);

      server.respond();
      server.restore();
    });

    it('should return the HttpClient call', () => {
      sut.httpClient.send = sandbox.stub().returnsThis();

      let testResponse = sut.postBook();

      expect(testResponse).toEqual(sut.httpClient.send());
    });
  });
});
