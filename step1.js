import Fizzbuzz from './app/fizzbuzz';
import DivisibleRule from './app/Rules/DivisibleRule';
import RulesContainer from './app/RulesContainer';

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const fizzbuzz = new Fizzbuzz(range);

const divisibleBy3Rule = new DivisibleRule(3, 3, 'fizz');
const divisibleBy5Rule = new DivisibleRule(5, 2, 'buzz');
const divisibleBy15Rule = new DivisibleRule(15, 1, 'fizzbuzz');

const rulesContainer = new RulesContainer();
rulesContainer.add(divisibleBy5Rule);
rulesContainer.add(divisibleBy3Rule);
rulesContainer.add(divisibleBy15Rule);

console.log(fizzbuzz.apply(rulesContainer.getRules()).join(' '));
