import { expect } from 'chai';
import DivisibleBy from '../../../app/Rules/DivisibleRule';

let rule = null;

test('Can instanciate a divisibleBy rule', () => {
  rule = new DivisibleBy(42, 14, 'foo');
  expect(rule).to.be.instanceof(DivisibleBy);
});

test('should get the rule name', () => {
  expect(rule.getName()).to.equal('DivisibleBy42');
});

test('should match a divisible number', () => {
  expect(rule.match(84)).to.equal(true);
});

test('should not match a wrong divisible number', () => {
  expect(rule.match(10)).to.equal(false);
  expect(rule.match(80)).to.equal(false);
});
