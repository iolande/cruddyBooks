import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class BookService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(config => {
      config
        .withBaseUrl('http://localhost:8000/api/')
        .withResponseType('json')
        .withHeader('Content-Type', 'application/json');
    });
  }

  getBooksByGenre(genre) {
    return this.httpClient.createRequest('books')
        .asGet()
        .withParams({
          genre: genre
        })
      .send()
      .then(response => JSON.parse(response && response.response))
      .catch(this.serviceError);
  }

  getBooks() {
    return this.httpClient.get('books')
      .then(response => JSON.parse(response && response.response))
      .catch(this.serviceError);
  }

  postBook(data) {
    const content = JSON.stringify(data);

    return this.httpClient.createRequest('books')
      .asPost()
      .withContent(content)
      .send();
  }

  serviceError(response) {
    console.log(response);
  }
}
