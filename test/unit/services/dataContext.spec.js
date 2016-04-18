import { DataContext } from 'src/services/dataContext';

class MockBookService {
  validResponseObject = [{"_id":"56be607391d3d47315637a4a","author":"Frank Herbert","title":"Dune","genre":"Science Fiction","__v":0,"read":false,"links":{"self":"http://localhost:8000/api/books/56be607391d3d47315637a4a"}}];

  getBooks = sinon.stub().returns(Promise.resolve(this.validResponseObject));
  getBooksByGenre = sinon.stub().returns(Promise.resolve(this.validResponseObject));
}

describe('DataContext', () => {
  let sut;
  let mockBookService;

  beforeEach(() => {
    mockBookService = new MockBookService();
    sut = new DataContext(mockBookService);
  });

  afterEach(() => {
    sut = null;
    mockBookService = null;
  });

  it('should be constructed with default values', () => {
    expect(sut.bookService).toBe(mockBookService);
    expect(Array.isArray(sut.books)).toBeTruthy();
    expect(sut.books.length).toBe(0);
  });

  describe('getBooks', () => {
    describe('when books are cached', () => {
      it('should return the cached books', done => {
        sut.books.push({ some: 'book' });
        const booksBeforeTest = sut.books;

        sut.getBooks()
          .then(response => {
            expect(response).toEqual(booksBeforeTest);
            expect(sut.bookService.getBooks.called).toBeFalsy();

            done();
          });
      });
    });

    describe('when the books cache is empty', () => {
      it('should call the book service', done => {
        sut.getBooks()
          .then(response => {
            expect(sut.bookService.getBooks.calledOnce).toBeTruthy();

            done();
          });
      });

      describe('after a successful call to the book service', () => {
        it('should update the cache from the service response', done => {
          sut.getBooks()
            .then(response => {
              expect(sut.books.length).not.toEqual(0);

              done();
            });
        });
      });

      describe('after a failed call to the book service', () => {
        it('should not update the cache from the service response', done => {
          mockBookService.getBooks.returns(Promise.reject('Something has gone wrong'));

          sut.getBooks()
            .then(response => {
              expect(true).toBeFalsy();

              done();
            })
            .catch(response => {
              expect(sut.books.length).toEqual(0);
              expect(response).toEqual('Something has gone wrong');

              done();
            });
        });
      });
    });
  });

  describe('getBooksByGenre', () => {
    describe('when books are cached', () => {
      it('should filter the cached books by genre and return the appropriate subset', done => {
        const book1 = { title: 'A book', genre: 'Comedy' };
        const book2 = { title: 'Another book', genre: 'Fantasy' };
        const book3 = { title: 'Yet another book', genre: 'Comedy' };

        sut.books.push(book1);
        sut.books.push(book2);
        sut.books.push(book3);

        const expectedSubset = [book1, book3];

        sut.getBooksByGenre('comedy')
          .then(response => {
            expect(response).toEqual(expectedSubset);
            expect(sut.bookService.getBooks.called).toBeFalsy();

            done();
          });
      });
    });

    describe('when the cache is empty', () => {
      it('should call the book service', done => {
        sut.getBooksByGenre('nonsense')
          .then(response => {
            expect(sut.bookService.getBooksByGenre.calledOnce).toBeTruthy();

            done();
          });
      });
    })
  });
});
