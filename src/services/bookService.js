import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { BookServiceInterceptor } from './bookServiceInterceptor';

@inject(HttpClient, BookServiceInterceptor)
export class BookService {
  constructor(httpClient, bookServiceInterceptor) {
    this.httpClient = httpClient;
    this.httpClient.configure(config => {
      config
        .withBaseUrl('http://localhost:8000/api/')
        .withResponseType('json')
        .withHeader('Content-Type', 'application/json')
        .withInterceptor(bookServiceInterceptor);
    });
  }

  getBooksByGenre(genre) {
    return this.httpClient.createRequest('books')
      .asGet()
        .withParams({
          genre: genre
        })
      .send();
  }

  getBooks() {
    return this.httpClient.get('books');
  }

  postBook(data) {
    const content = JSON.stringify(data);

    return this.httpClient.createRequest('books')
      .asPost()
        .withContent(content)
      .send();
  }
}
