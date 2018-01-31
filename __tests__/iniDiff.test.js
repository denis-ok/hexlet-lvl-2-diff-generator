import path from 'path';
import fs from 'fs';
import genDiff from '../src';

describe('genDiff test', () => {
  test('test 1', () => {
    const path1 = path.join(__dirname, '/__fixtures__/ini/1-before.ini');
    const path2 = path.join(__dirname, '/__fixtures__/ini/1-after.ini');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/ini/1-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });

  test('test 2 - empty files', () => {
    const path1 = path.join(__dirname, '/__fixtures__/ini/empty.ini');
    const path2 = path.join(__dirname, '/__fixtures__/ini/empty.ini');
    expect(genDiff(path1, path2)).toBe('{}');
  });

  test('test 3 - empty file >> file with data', () => {
    const path1 = path.join(__dirname, '/__fixtures__/ini/empty.ini');
    const path2 = path.join(__dirname, '/__fixtures__/ini/1-before.ini');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/ini/3-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });
});
