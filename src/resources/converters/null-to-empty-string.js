export class NullToEmptyStringValueConverter {
  toView(value) {
    return value === null ? '' : value;
  }
  fromView(value) {
    return value === '' ? null : value;
  }
}
