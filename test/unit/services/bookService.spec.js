import {BookService} from 'src/services/bookService';
import {isPromise} from 'test/unit/_helpers/helpers';

xdescribe('BookService', () => {
  let testee;
  let sandbox;

  beforeEach(() => {
    testee = new BookService();
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    testee = null;
    sandbox.restore();
  });

  describe('constructor', () => {
    it('should define core properties', () => {
      expect(testee.httpClient).toBeDefined();
    });
  });

  describe('getBooks via httpClient', () => {
    it('should GET once from the service', done => {
      // let getSpy = sandbox.spy(testee.httpClient, 'get');
      testee.httpClient.get = sandbox.stub().returns(() => Promise.resolve());
      // widget.fetch = sandbox.stub().returns({ one: 1, two: 2 });
      testee.getBooks();

      setTimeout(function() {
        expect(testee.httpClient.get.called).toBeTruthy();
        // testee.httpClient.get.restore();
        done();
      }, 1);
    });

    it('should return a promise', done => {
      const returnedData = testee.getBooks();

      setTimeout(function() {
        expect(isPromise(returnedData)).toBeTruthy();
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

  describe('postBook via httpClient', () => {
    let reqArgs = {};
    let sendSpy;
    let fakeServer;
    let successResponse;

    let fakeData;
    let successSpy;
    let failureSpy;

    beforeEach(() => {
      sendSpy = sandbox.spy(testee.httpClient, 'send');
      fakeServer = sandbox.fakeServer.create();
      successResponse = [ 200, { "Content-Type": "application/json" }, '{ "stuff": "is", "awesome": "in here" }' ];

      fakeServer.respondWith('POST', 'books', successResponse);
      fakeData = {
        book: 'information'
      };

      successSpy = sandbox.spy();
      failureSpy = sandbox.spy();

      testee.postBook(fakeData)
        .then(successSpy)
        .catch(failureSpy);

      fakeServer.respond();
    });

    afterEach(() => {
      successResponse = null;
      testee.httpClient.send.restore();
      fakeServer.restore();

      successSpy = null;
      failureSpy = null;
      fakeData = null;
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

        expect(reqArgs.content).toEqual(JSON.stringify(fakeData));
        done();
      }, 1);
    });
  });
});
