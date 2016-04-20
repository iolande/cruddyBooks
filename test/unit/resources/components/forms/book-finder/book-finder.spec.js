import { TemplatingEngine, Container } from 'aurelia-framework';
import { BookFinder } from '../../../../../../src/resources/components/forms/book-finder/book-finder';

describe('BookFinder', () => {
  let container;
  let templateEngine;
  let bookFinder;

  beforeEach(() => {
    container = new Container();
    templateEngine = container.get(TemplatingEngine);
    bookFinder = templateEngine.createViewModelForUnitTest(BookFinder);
  });

  afterEach(() => {
    container = null;
    templateEngine = null;
    bookFinder = null;
  });

  it('should be initialized', () => {
    expect(bookFinder).not.toBe(null);
    expect(bookFinder).not.toBe(undefined);
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
