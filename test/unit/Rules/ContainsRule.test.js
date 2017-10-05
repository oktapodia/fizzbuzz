import { expect } from 'chai';
import ContainsRule from '../../../app/Rules/ContainsRule';

let rule = null;

test('Can instanciate an contains rule', () => {
  rule = new ContainsRule(4, 14, 'foo');
  expect(rule).to.be.instanceof(ContainsRule);
});

test('should get the rule name', () => {
  expect(rule.getName()).to.equal('Contains4');
});

test('should match an contains number', () => {
  expect(rule.match(4563)).to.equal(true);
  expect(rule.match(114563)).to.equal(true);
  expect(rule.match(1144)).to.equal(true);
});

test('should not match a wrong equal number', () => {
  expect(rule.match(10)).to.equal(false);
  expect(rule.match(80)).to.equal(false);
  expect(rule.match(83)).to.equal(false);
});
