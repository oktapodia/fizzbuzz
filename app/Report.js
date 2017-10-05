import { isInteger } from 'lodash';

class Report {
  report = {};

  addType(name) {
    this.report[name] = 0;

    return this;
  }

  increase(type) {
    const typeFormatted = this.format(type);
    if (!this.report[typeFormatted]) {
      this.addType(typeFormatted);
    }

    this.report[typeFormatted] = this.report[typeFormatted] + 1;

    return this;
  }

  format(type) {
    if (isInteger(type)) {
      return 'integer';
    }

    return type;
  }

  getType(type) {
    return this.report[type];
  }

  getAll() {
    return this.report;
  }
}

export default Report;
