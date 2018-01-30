import path from 'path';
import fs from 'fs';
import jsonDiff from '../src';

describe('jsonDiff test', () => {
  test('test 1', () => {
    const path1 = path.join(__dirname, '/__fixtures__/1-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/1-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/1-result'), 'utf8');
    expect(jsonDiff(path1, path2)).toBe(result);
  });

  test('test 2', () => {
    const path1 = path.join(__dirname, '/__fixtures__/2-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/2-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/2-result'), 'utf8');
    expect(jsonDiff(path1, path2)).toBe(result);
  });

  test('test 3-1 - adding to empty json', () => {
    const path1 = path.join(__dirname, '/__fixtures__/3-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/3-after.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/3-result-1'), 'utf8');
    expect(jsonDiff(path1, path2)).toBe(result);
  });

  test('test 3-2 - removing all entries from json', () => {
    const path1 = path.join(__dirname, '/__fixtures__/3-after.json');
    const path2 = path.join(__dirname, '/__fixtures__/3-before.json');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/3-result-2'), 'utf8');
    expect(jsonDiff(path1, path2)).toBe(result);
  });

  test('test 4 - both are empty', () => {
    const path1 = path.join(__dirname, '/__fixtures__/4-before.json');
    const path2 = path.join(__dirname, '/__fixtures__/4-after.json');
    expect(jsonDiff(path1, path2)).toBe('{}');
  });
});
