import moment from 'moment';
import {ThreeFieldDateValueConverter} from '../../../../src/resources/converters/three-field-date';

describe('ThreeFieldDateValueConverter', () => {
  describe('toView', () => {
    let sut;

    beforeEach(() => {
      sut = new ThreeFieldDateValueConverter();
    });

    afterEach(() => {
      sut = null;
    });

    describe('valid input date', () => {
      it('should return an object containing day, month and year properties (1970-12-31)', () => {
        let inputDate = '1970-12-31';

        let result = sut.toView(inputDate);

        expect(result).toEqual({ day: 31, month: 12, year: 1970 });
      });

      it('should return an object containing day, month and year properties (1971-08-09)', () => {
        let inputDate = '1971-08-09';

        let result = sut.toView(inputDate);

        expect(result).toEqual({ day: 9, month: 8, year: 1971 });
      });
    });

    describe('invalid input date', () => {
      it('should return today\'s date if the input date is not valid (abcd)', () => {
        let inputDate = 'abcd';
        const today = moment(new Date());

        let result = sut.toView(inputDate);

        expect(result).toEqual({ day: today.date(), month: today.month() + 1, year: today.year() });
      });
    });
  });
});
