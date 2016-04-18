import { HttpClient } from 'aurelia-http-client'
import { BookService } from 'src/services/bookService';

describe('BookService', () => {
  let sut;
  let sandbox;

  beforeEach(() => {
    sut = new BookService(new HttpClient());
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sut = null;
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

    describe('success', () => {
      it('should parse the response as JSON');
      it('should call the failure callback if the response does not parse as JSON');
    });

    describe('failure', () => {
      it('should call the failure callback');
    });
  });

  xdescribe('postBook via httpClient', () => {
    let reqArgs = {};
    let sendSpy;
    let fakeServer;
    let successResponse;

    let mockData;
    let successSpy;
    let failureSpy;

    beforeEach(() => {
      sendSpy = sandbox.spy(sut.httpClient, 'send');
      fakeServer = sandbox.fakeServer.create();
      successResponse = [200, { "Content-Type": "application/json" }, '{ "stuff": "is", "awesome": "in here" }'];

      fakeServer.respondWith('POST', 'books', successResponse);
      mockData = {
        book: 'information'
      };

      successSpy = sandbox.spy();
      failureSpy = sandbox.spy();

      sut.postBook(mockData)
        .then(successSpy)
        .catch(failureSpy);

      fakeServer.respond();
    });

    afterEach(() => {
      successResponse = null;
      sut.httpClient.send.restore();
      fakeServer.restore();

      successSpy = null;
      failureSpy = null;
      mockData = null;
    });

    /*  TODO: Work out why the promise resolve / fail
     *  calls are not being picked up.
     */
    it('should POST once to the service', (done) => {
      setTimeout(function() {
        expect(sendSpy.calledOnce).toBeTruthy();

        // expect(successSpy.calledOnce).toBeTruthy();
        // expect(failureSpy.calledOnce).toBeFalsy();
        done();
      }, 1);
    });

    /*  TODO: find out if there's a better way to test the request than
     *  using reqArgs = sendSpy.args[0][0];
     */
    it('should call the correct URL and endpoint', (done) => {
      setTimeout(function() {
        reqArgs = sendSpy.args[0][0];

        expect(reqArgs.baseUrl).toEqual('http://localhost:8000/api/');
        expect(reqArgs.url).toEqual('books');
        done();
      }, 1);
    });

    it('should call with the correct data', (done) => {
      setTimeout(function() {
        reqArgs = sendSpy.args[0][0];

        expect(reqArgs.content).toEqual(JSON.stringify(mockData));
        done();
      }, 1);
    });
  });
});
