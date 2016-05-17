import moment from 'moment';

export class ThreeFieldDateValueConverter {
  toView(dateValue) {
    let testDate = moment(new Date(dateValue));
    if (!testDate.isValid()) { testDate = moment(new Date()); }

    return { day: testDate.date(), month: testDate.month() + 1, year: testDate.year() };
  }
}
