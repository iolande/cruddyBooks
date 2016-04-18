export class BookServiceInterceptor {
  request(message) {
    return message;
  }

  response(message) {
    return JSON.parse(message && message.response);
  }
}
