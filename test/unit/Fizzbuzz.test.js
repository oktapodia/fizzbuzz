import { expect } from 'chai';
import sinon from 'sinon';
import FizzBuzz from '../../app/fizzbuzz';
import RuleMock from './Rules/RuleMock';

test('Can apply rules to fizzbuzz', () => {
  const fizzBuzz = new FizzBuzz([1, 2]);

  const rule1 = new RuleMock(1, 2, 'foo');
  const rule2 = new RuleMock(2, 1, 'bar');

  const spy1 = sinon.spy(rule1, 'match');
  const spy2 = sinon.spy(rule2, 'match');

  fizzBuzz.apply([rule1, rule2]);

  expect(spy1.firstCall.args[0]).to.equal(1);
  expect(spy1.secondCall.args[0]).to.equal(2);

  expect(spy2.firstCall.args[0]).to.equal(1);
  expect(spy2.secondCall.args[0]).to.equal(2);
});
