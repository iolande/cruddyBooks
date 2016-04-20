export class BookServiceInterceptor {
  request(message) {
    return message;
  }

  requestError() {
    // handle request error message
  }

  response(message) {
    return JSON.parse(message && message.response);
  }

  responseError() {
    // handle response error message
  }
}
