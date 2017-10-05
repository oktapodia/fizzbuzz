import { forEach, isArray, map } from 'lodash';
import Report from './Report';

class FizzBuzz {
  rangeNumbers = [];
  report;

  constructor(rangeNumbers) {
    if (!isArray(rangeNumbers)) {
      throw new Error('The rangeNumbers must be an array');
    }
    this.rangeNumbers = rangeNumbers;
    this.report = new Report();
  }

  apply(rules) {
    return map(this.rangeNumbers, (number) => {
      let result = number;
      forEach(rules, (rule) => {
        if (rule.match(number)) {
          result = rule.getTextReplacement();
        }
      });

      this.report.increase(result);

      return result;
    });
  }

  getReport() {
    return this.report;
  }
}

export default FizzBuzz;
