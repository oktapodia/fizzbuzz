import AbstractRule from './Rules/AbstractRule';

class RulesContainer {
  rules = [];

  add(rule) {
    if (!(rule instanceof AbstractRule)) {
      throw new Error(`${rule} is not a valid rule.`);
    }

    this.rules.push(rule);

    return this;
  }

  static compare(a, b) {
    return b.getPriority() - a.getPriority();
  }

  getRules() {
    this.rules.sort(RulesContainer.compare);

    return this.rules;
  }
}

export default RulesContainer;
