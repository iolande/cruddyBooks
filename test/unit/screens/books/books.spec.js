import {Books} from 'src/screens/books/books';

class MockDataContext {
  bookArray = [
    { title: 'A book', genre: 'Comedy' },
    { title: 'Another book', genre: 'Fantasy' },
    { title: 'Yet another book', genre: 'Comedy' }
  ];

  successMessage = 'Success';

  getBooks = sinon.stub().returns(Promise.resolve(this.bookArray));
  saveBook = sinon.stub().returns(this.successMessage);
}

describe('Books', () => {
  let sut;
  let mockDataContext;

  beforeEach(() => {
    mockDataContext = new MockDataContext();
    sut = new Books(mockDataContext);
  });

  afterEach(() => {
    mockDataContext = null;
    sut = null;
  });

  describe('constructor', () => {
    it('should correctly construct the properties', () => {
      expect(sut.books).toBeNull();
      expect(sut.dataContext).toBe(mockDataContext);
    });
  });

  describe('activate', () => {
    it('should update the viewmodel with books from the dataContext', done => {
      const viewmodelBooksBeforeTest = sut.books;

      sut.activate()
        .then(() => {
          expect(sut.dataContext.getBooks.calledOnce).toBeTruthy();
          expect(sut.books).not.toEqual(viewmodelBooksBeforeTest);
          expect(sut.books).toEqual(mockDataContext.bookArray);

          done();
        });
    });

    it('should handle errors returned from the call to the dataContext');
  });

  describe('addBook', () => {
    it('should save input the book to the dataContext', () => {
      const bookForAddition = { title: 'Additional book', genre: 'Etymology' };

      sut.addBook(bookForAddition);

      expect(sut.dataContext.saveBook.calledOnce).toBeTruthy();
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
