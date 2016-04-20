import { TemplatingEngine, Container } from 'aurelia-framework';
import { ContrivedBookFinder } from '../../../../src/resources/components/contrived-book-finder/contrived-book-finder';

describe('ContrivedBookFinder', () => {
  let container;
  let templateEngine;
  let sut;

  beforeEach(() => {
    container = new Container();
    templateEngine = container.get(TemplatingEngine);
    sut = templateEngine.createViewModelForUnitTest(ContrivedBookFinder);
  });

  afterEach(() => {
    container = null;
    templateEngine = null;
    sut = null;
  });

  it('should be initialized', () => {
    expect(sut).not.toBe(null);
    expect(sut).not.toBe(undefined);
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
});
