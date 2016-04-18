import { HttpClient } from 'aurelia-http-client'
import { BookServiceInterceptor } from 'src/services/bookServiceInterceptor';

describe('BookServiceInterceptor', () => {
  let sut;

  beforeEach(() => {
    sut = new BookServiceInterceptor();
  });

  afterEach(() => {
    sut = null;
  });

  it('should pass the request straight through', () => {
    let requestMessage = { some: 'message' };
    let resultMessage = null;

    resultMessage = sut.request(requestMessage);

    expect(resultMessage).toEqual(requestMessage);
  });

  it('should pass the response straight through', () => {
    let responseMessage = { some: 'message' };
    let resultMessage = null;

    resultMessage = sut.response(responseMessage);

    expect(resultMessage).toEqual(responseMessage);
  });
});
