import AbstractRule from './AbstractRule';

class DivisibleRule extends AbstractRule {
  match(number) {
    return number % this.getNumber() === 0;
  }

  getName() {
    return `DivisibleBy${this.getNumber()}`;
  }
}

export default DivisibleRule;
