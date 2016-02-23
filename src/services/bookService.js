import {HttpClient} from 'aurelia-http-client';
import {HttpClient as FetchClient} from 'aurelia-fetch-client';
import 'fetch';

export class BookService {
  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.configure(config => {
      config
        .withBaseUrl('http://localhost:8000/api/')
        .withResponseType('json')
        .withHeader('Content-Type', 'application/json');
    });

    this.fetchClient = new FetchClient();
    this.fetchClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });
  }

  getBooks() {
    return this.httpClient.get('books')
      .then(response => JSON.parse(response && response.response))
      .catch(this.serviceError);
  }

  fetchBooks() {
    return this.fetchClient.fetch('books')
      .then(response => response.json())
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

  httpClientConfigInfo() {
    // withParams - querystring params
    // withContent
    // withReviver
    // withReplacer
    // withInterceptor
  }

  withReplacerExample() {
    // withReplacer([])
    // Can ensure the request only sends specific data from the full request object
    // e.g withReplacer(['houseName']) will only send houseName

    // EXAMPLE from their tests
    // https://github.com/aurelia/http-client/blob/master/test/http-client.spec.js
    // ---------------------------------------------------------------------------
    // var content = { firstName: "John", lastName: "Doe" };
    // var client = new HttpClient()
    //   .configure(x => {
    //     x.withBaseUrl(baseUrl);
    //     x.withHeader('Content-Type', 'application/json');
    //   });

    // client.createRequest('some/cool/path')
    //   .asPost()
    //   .withContent(content)
    //   .withReplacer(['firstName'])
    //   .send()
    //   .then(() => {
    //     var request = jasmine.Ajax.requests.mostRecent();

    //     expect(request.data()).not.toEqual(content);
    //     expect(request.data()).toEqual({ firstName: "John" });
    //     done();
    //   });
  }
}
