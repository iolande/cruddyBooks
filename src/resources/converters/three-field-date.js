import moment from 'moment';

export class ThreeFieldDateValueConverter {
  toView(dateValue) {
    let tmpDate = moment(new Date(dateValue));
    if (!tmpDate.isValid()) { tmpDate = moment(new Date()); }

    return { day: tmpDate.date(), month: tmpDate.month() + 1, year: tmpDate.year() };
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
