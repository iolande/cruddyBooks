import {Books} from 'src/screens/books/books';
import {MockBookService} from 'test/unit/_helpers/services/bookService';
import {isPromise} from 'test/unit/_helpers/helpers';

describe('Books', () => {
  let testee;
  let mockBookService;

  beforeEach(() => {
    mockBookService = new MockBookService();
    testee = new Books(mockBookService);
  });

  afterEach(() => {
    mockBookService = null;
    testee = null;
  });

  describe('constructor', () => {
    it('should correctly construct the properties', () => {
      expect(testee.bookList).toEqual([]);
      expect(testee.bookService).toBe(mockBookService);
    });

    xit('should do something with sinon', done => {
      const getBooksStub = sinon.stub(mockBookService, 'getBooks', () => {
        return Promise.resolve();
      });

      testee.getBooks();

      setTimeout(function() {
        expect(getBooksStub.calledOnce).toBeTruthy();
        done();
      }, 1);
    });
  });
});


// Maybe how to register a Mock as the real Service for testing in here?
// http://drdwilcox.blogspot.co.uk/2015/11/testing-custom-elements.html


// https://www.danyow.net/inversion-of-control-with-aurelia-part-2/
// export class Foo {
//   message = 'hello world';
// }

// @inject(Foo)
// export class Bar {
//   constructor(foo) {
//     this.foo = foo;
//   }

//   iWantToTestThisMethod() {
//     return this.foo.message;
//   }
// }

// // In this case you would register a mock Foo in the container:

// this.container.registerInstance(Foo, { message: 'goodbye world' });

// // now you can test Bar:

// let bar = this.container.get(Bar);

// expect(bar.iWantToTestThisMethod()).toBe('goodbye world');
