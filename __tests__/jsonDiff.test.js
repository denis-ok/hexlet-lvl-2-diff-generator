import path from 'path';
import fs from 'fs';
import genDiff from '../src';

describe('genDiff flat test', () => {
  test('test 1 - flat default', () => {
    const path1 = path.join(__dirname, '/__fixtures__/json/1-flat-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/json/1-flat-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/1-flat-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });

  test('test 2 - deep default', () => {
    const path1 = path.join(__dirname, '/__fixtures__/json/1-deep-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/json/1-deep-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/1-deep-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });

  test('test 3 - flat plain', () => {
    const path1 = path.join(__dirname, '/__fixtures__/json/1-flat-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/json/1-flat-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/1-flat-result-plain'), 'utf8');
    expect(genDiff(path1, path2, 'plain')).toBe(result);
  });

  test('test 4 - deep plain', () => {
    const path1 = path.join(__dirname, '/__fixtures__/json/1-deep-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/json/1-deep-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/1-deep-result-plain'), 'utf8');
    expect(genDiff(path1, path2, 'plain')).toBe(result);
  });
});
