// import { HttpClient } from 'aurelia-http-client';
// import {isPromise} from 'test/unit/_helpers/helpers';

// import {BookService} from 'src/services/bookService';

// import {initialize} from 'aurelia-pal-browser';
// initialize();

// xdescribe('TestBookService', () => {
//   let sut;
//   let sandbox;
//   let mockInterceptor;

//   class MockInterceptor {
//     messageCopy = null;
//     request(message) {
//       this.messageCopy = message;
//       return message;
//     }
//   }

//   beforeEach(() => {
//     mockInterceptor = new MockInterceptor();
//     sut = new BookService(new HttpClient(), mockInterceptor);
//     sandbox = sinon.sandbox.create();
//   });

//   afterEach(() => {
//     sut = null;
//     mockInterceptor = null;
//     sandbox.restore();
//   });

//   it('should call the API with the correct Content-Type header', done => {
//     let requestMessage;
//     let server = sinon.fakeServer.create();
//     let okResponse = [
//       200,
//       { 'Content-type': 'application/json' },
//       '{"hello":"world"}'
//     ];

//     server.respondWith('GET', 'http://localhost:8000/api/books', okResponse);

//     sut.getBooks();

//     setTimeout(function() {
//       requestMessage = mockInterceptor.messageCopy;

//       expect(requestMessage.headers.headers['Content-Type']).toBe('application/json');
//       done();
//     }, 1);

//     server.respond();
//     server.restore();
//   });
// });
