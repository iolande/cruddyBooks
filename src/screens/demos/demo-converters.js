import moment from 'moment';

export class DemoConverters {
  dateOfBirth = '1980-07-23'
  dobMessage = {}

  validateDob() {
    let dob = moment(new Date(this.dateOfBirth));

    if (!dob.isValid()) {
      this.dobMessage = { message: 'You must enter a dateOfBirth', level: 'error' };
      return false;
    }

    if (dob.diff(new Date(), 'years') < 18) {
      this.dobMessage = { message: 'User must be over 18', level: 'error' };
      return false;
    }

    if (dob.diff(new Date(), 'years') > 100) {
      this.dobMessage = { message: 'User must be under 100', level: 'error' };
      return false;
    }
  }
}
