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
    // Need to bind this within number fields so have to allow invalid dates
    // or the usability will be poor as the user changes one field at a time
    return `${dateObject.year}-${dateObject.month}-${dateObject.day}`;
  }
}
