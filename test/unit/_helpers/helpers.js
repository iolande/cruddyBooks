// https://stackoverflow.com/questions/23078800/testing-if-a-method-returns-an-promise
// https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
export function isPromise(obj) {
  return !!obj.then && typeof obj.then === 'function';
}

export function getMockServiceResponse(desiredResponseData) {
  // Sample books
  // {"_id":"56d4c09f6bfaafd5923f93e5","author":"Shakuntala Devi","title":"Figuring: The Joy of Numbers","genre":"Mathematics","__v":0,"read":false,"links":{"self":"http://localhost:8000/api/books/56d4c09f6bfaafd5923f93e5"}}
  // {"_id":"56d4bff66bfaafd5923f93e2","author":"Ian Rankin","title":"The Falls","genre":"Crime","__v":0,"read":false,"links":{"self":"http://localhost:8000/api/books/56d4bff66bfaafd5923f93e2"}}
  // {"_id":"56e087c6614739abe8129a29","title":"Mathematical Methods in the Physical Sciences","author":"M Boas","genre":"Maths","__v":0,"read":true,"links":{"self":"http://localhost:8000/api/books/56e087c6614739abe8129a29"}}

  return {
    'requestMessage': {
      'method': 'GET',
      'url': 'books',
      'headers': {
        'headers': {
          'Content-Type': 'application/json'
        }
      },
      'baseUrl': 'BASE_URL',
      'responseType': 'json',
      'interceptors': [{}]
    },
    'statusCode': 200,
    'response': desiredResponseData,
    'isSuccess': true,
    'statusText': 'OK',
    'mimeType': 'application/json',
    'headers': {
      'headers': {
        'Content-Type': 'application/json; charset=utf-8'
      }
    },
    'responseType': 'json'
  };
}
