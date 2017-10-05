class AbstractRule {
  priority;
  number;
  textReplacement;
  constructor(number, priority, textReplacement) {
    if (new.target === AbstractRule) {
      throw new TypeError('Cannot construct AbstractRule instances directly');
    }

    this.priority = priority;
    this.number = number;
    this.textReplacement = textReplacement;
  }

  match() {
    throw new Error('Must be implemented');
  }

  getPriority() {
    return this.priority;
  }

  getNumber() {
    return this.number;
  }

  getTextReplacement() {
    return this.textReplacement;
  }
}

export default AbstractRule;
