import { expect } from 'chai';
import RulesContainer from '../../app/RulesContainer';
import RuleMock from './Rules/RuleMock';

let rulesContainer = null;

beforeEach(() => {
  rulesContainer = new RulesContainer();
});

test('Can add multiple rules and sort them', () => {
  const rule1 = new RuleMock(25, 5, 'foo');
  const rule2 = new RuleMock(50, 10, 'bar');
  rulesContainer.add(rule1);
  rulesContainer.add(rule2);

  const rules = rulesContainer.getRules();
  expect(rules.length).to.be.equal(2);

  expect(rules[0].getPriority()).to.equal(10);
  expect(rules[1].getPriority()).to.equal(5);
});
