// https://stackoverflow.com/questions/23078800/testing-if-a-method-returns-an-promise
// https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
export function isPromise(obj) {
  return !!obj.then && typeof obj.then === 'function';
}
