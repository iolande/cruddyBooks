import {Book} from '../../../src/models/book';

describe('Book', () => {
  let sut;

  beforeEach(() => {
    sut = new Book();
  });

  afterEach(() => {
    sut = null;
  });

  describe('constructor', () => {
    it('should set the expected properties', () => {
      expect(Object.keys(sut).length).toBe(4);

      expect(sut.title).toEqual('');
      expect(sut.author).toEqual('');
      expect(sut.genre).toEqual('');
      expect(sut.read).toBeFalsy();
    });
  });

  describe('update', () => {
    it('should update the property values to those passed in', () => {
      let newValues = {
        title: 'Book title',
        author: 'Joe Bloggs',
        genre: 'Reference',
        read: true
      };

      sut.update(newValues);

      expect(sut.title).toEqual('Book title');
      expect(sut.author).toEqual('Joe Bloggs');
      expect(sut.genre).toEqual('Reference');
      expect(sut.read).toBeTruthy();
    });

    it('should set any properties without input values to their default', () => {
      let newValues = {
        genre: 'Reference',
        read: true
      };

      sut.update(newValues);

      expect(sut.title).toEqual('');
      expect(sut.author).toEqual('');
      expect(sut.genre).toEqual('Reference');
      expect(sut.read).toBeTruthy();
    });

    it('should not add extra properties', () => {
      let newValues = {
        aardvark: 'Unexpected property'
      };

      sut.update(newValues);

      expect(sut.aardvark).toBeUndefined();
    });
  });

  describe('clear', () => {
    it('should set the property values to the defaults', () => {
      sut.author = 'An author';
      sut.title = 'A title';
      sut.genre = 'A genre';
      sut.read = true;

      sut.clear();

      expect(sut.title).toEqual('');
      expect(sut.author).toEqual('');
      expect(sut.genre).toEqual('');
      expect(sut.read).toBeFalsy();
    });
  });
});
