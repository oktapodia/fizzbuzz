import AbstractRule from './AbstractRule';

class DivisibleRule extends AbstractRule {
  match(number) {
    return number.toString().indexOf(this.getNumber()) !== -1;
  }

  getName() {
    return `Contains${this.getNumber()}`;
  }
}

export default DivisibleRule;
