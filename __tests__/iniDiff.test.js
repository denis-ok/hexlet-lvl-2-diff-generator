import path from 'path';
import fs from 'fs';
import genDiff from '../src';

describe('genDiff flat test', () => {
  test('test 1 - flat configs', () => {
    const path1 = path.join(__dirname, '/__fixtures__/ini/1-flat-before.ini');
    const path2 = path.join(__dirname, '/__fixtures__/ini/1-flat-after.ini');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/ini/1-flat-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });

  test('test 2 - deep configs', () => {
    const path1 = path.join(__dirname, '/__fixtures__/ini/1-deep-before.ini');
    const path2 = path.join(__dirname, '/__fixtures__/ini/1-deep-after.ini');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/ini/1-deep-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });
});
