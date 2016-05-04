import { Container, TemplatingEngine } from 'aurelia-framework';
import { ContrivedBookFinder } from '../../../../src/resources/components/contrived-book-finder/contrived-book-finder';

class Book {
  title = ''
  author = ''
  genre = ''
  read = false

  update = sinon.stub()
  clear = sinon.stub()
}

class DataContext {

}

xdescribe('ContrivedBookFinder', () => {
  let mockBook;
  let mockDataContext;

  let container;
  let templateEngine;

  let sut;

  beforeEach(() => {
    mockBook = new Book();
    mockDataContext = new DataContext();

    container = new Container();
    container.registerInstance(DataContext, mockDataContext);
    container.registerInstance(Book, mockBook);

    templateEngine = container.get(TemplatingEngine);
    sut = templateEngine.createViewModelForUnitTest(ContrivedBookFinder);
  });

  afterEach(() => {
    sut = null;
    templateEngine = null;
    container = null;
    mockBook = null;
    mockDataContext = null;
  });

  describe('constructor', () => {
    it('should set the expected properties', () => {
      expect(Object.keys(sut).length).toBe(3);

      expect(sut.booksFilteredByGenre).toBeNull();
      expect(sut.workingBook).toEqual(new Book());
      expect(sut.dataContext).toBeNull();
    });
  });

  describe('searchByGenre', () => {
    describe('when a search term has been entered', () => {
      it('should request a list of books for the search term');
      it('should update the list of filtered books with the response');
    });

    describe('when no search term has been entered', () => {
      it('should display a message to the user');
      it('should not request for a filtered list of books');
      it('should not change the current list of filtered books');
    });
  });

  xdescribe('selectBook', () => {
    it('should set the selectedBook on the viewmodel', () => {
      const selectedBookBeforeTest = JSON.parse(JSON.stringify(sut.selectedBook));
      const bookForSelection = { title: 'Select book', genre: 'Science' };

      sut.selectBook(bookForSelection);

      expect(sut.selectedBook).not.toEqual(selectedBookBeforeTest);
      expect(sut.selectedBook).toEqual(bookForSelection);
    });
  });
});
