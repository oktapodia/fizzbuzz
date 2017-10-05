import { expect } from 'chai';
import RuleMock from './RuleMock';
import AbstractRule from '../../../app/Rules/AbstractRule';

let rule = null;

test('Can instanciate a rule', () => {
  rule = new RuleMock(42, 14, 'foo');
  expect(rule).to.be.instanceof(AbstractRule);
});

test('should get the rule priority', () => {
  expect(rule.getPriority()).to.equal(14);
});

test('should get the rule number', () => {
  expect(rule.getNumber()).to.equal(42);
});

test('should get the rule textReplacement', () => {
  expect(rule.getTextReplacement()).to.equal('foo');
});
