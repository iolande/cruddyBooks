import moment from 'moment';

export class ThreeFieldDateValueConverter {
  toView(dateValue, part) {
    let tmpDate = moment(new Date(dateValue));
    if (!tmpDate.isValid()) { tmpDate = moment(new Date()); }
    let dateObject = { day: tmpDate.date(), month: tmpDate.month() + 1, year: tmpDate.year() };

    if (part && dateObject[part]) { return dateObject[part]; }

    return dateObject;
  }

  fromView(dateObject) {
    let tmpDate = moment(new Date(`${dateObject.year}-${dateObject.month}-${dateObject.day}`));

    if (tmpDate.isValid()) {
      return tmpDate.format('YYYY-MM-DD');
    } else {
      return null;
    }
  }
}
