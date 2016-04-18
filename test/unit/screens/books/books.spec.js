import {Books} from 'src/screens/books/books';
import {isPromise} from 'test/unit/_helpers/helpers';

describe('Books', () => {
  let testee;
  let mockDataContext;

  class MockDataContext {}

  beforeEach(() => {
    mockDataContext = new MockDataContext();
    testee = new Books(mockDataContext);
  });

  afterEach(() => {
    mockDataContext = null;
    testee = null;
  });

  describe('constructor', () => {
    it('should correctly construct the properties', () => {
      expect(testee.books).toBeNull();
      expect(testee.dataContext).toBe(mockDataContext);
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
