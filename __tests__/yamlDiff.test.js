import path from 'path';
import fs from 'fs';
import genDiff from '../src';

describe('genDiff test', () => {
  test('test 1', () => {
    const path1 = path.join(__dirname, '/__fixtures__/yaml/1-before.yml');
    const path2 = path.join(__dirname, '/__fixtures__/yaml/1-after.yml');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/1-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });

  test('test 2', () => {
    const path1 = path.join(__dirname, '/__fixtures__/yaml/2-before.yml');
    const path2 = path.join(__dirname, '/__fixtures__/yaml/2-after.yml');
    const result = fs.readFileSync(path.join(__dirname, '/__fixtures__/json/2-result'), 'utf8');
    expect(genDiff(path1, path2)).toBe(result);
  });
});
