import { expect } from 'chai';
import Report from '../../app/Report';

let report = null;

beforeAll(() => {
  report = new Report();
});

test('Can add multiple types', () => {
  report.addType('foo');
  report.addType('bar');

  expect(report.getType('foo')).to.equal(0);
  expect(report.getType('bar')).to.equal(0);
});

test('Can format type', () => {
  expect(report.format('foo')).to.equal('foo');
  expect(report.format(32)).to.equal('integer');
});

test('Can increase foo type to 3', () => {
  report.increase('foo');
  report.increase('foo');

  expect(report.getType('foo')).to.equal(2);
});

test('Can increase a non existant type', () => {
  report.increase('biz');
  expect(report.getType('biz')).to.equal(1);
});

test('Can get all reports', () => {
  const reportAll = report.getAll();
  expect(reportAll.foo).to.equal(2);
  expect(reportAll.bar).to.equal(0);
});
