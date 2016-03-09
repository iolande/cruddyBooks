export class MockBookService {
  constructor() {
    // this.httpClient = new HttpClient();
    // this.httpClient.configure(config => {
    //   config
    //     .withBaseUrl('http://localhost:8000/api/')
    //     .withResponseType('json')
    //     .withHeader('Content-Type', 'application/json');
    // });

    // this.fetchClient = new FetchClient();
    // this.fetchClient.configure(config => {
    //   config
    //     .useStandardConfiguration()
    //     .withBaseUrl('http://localhost:8000/api/');
    // });
  }

  getBooksByGenre(genre) {
    // return this.httpClient.createRequest('books')
    //     .asGet()
    //     .withParams({
    //       genre: genre
    //     })
    //   .send()
    //   .then(response => JSON.parse(response && response.response))
    //   .catch(this.serviceError);
  }

  getBooks() {
    // return this.httpClient.get('books')
    //   .then(response => JSON.parse(response && response.response))
    //   .catch(this.serviceError);
  }

  fetchBooks() {
    // return this.fetchClient.fetch('books')
    //   .then(response => response.json())
    //   .catch(this.serviceError);
  }

  postBook(data) {
    // const content = JSON.stringify(data);

    // return this.httpClient.createRequest('books')
    //   .asPost()
    //   .withContent(content)
    //   .send();
  }

  serviceError(response) {
    console.log(response);
  }
}
