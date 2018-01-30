import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

class Config {
  constructor(filepath) {
    this.path = filepath;
    this.type = path.parse(filepath).ext;
    this.data = fs.readFileSync(this.path, 'utf8');
  }

  parse() {
    if (this.type === '.json') {
      return JSON.parse(this.data);
    }

    if (this.type === '.yaml' || this.type === '.yml') {
      return yaml.load(this.data);
    }

    return false;
  }
}

const buildString = (obj1, obj2) => {
  const keys1 = new Set(Object.keys(obj1));
  const keys2 = new Set(Object.keys(obj2));
  const allKeys = Object.keys({ ...obj1, ...obj2 });

  const indentSame = '    ';
  const indentRemoved = '  - ';
  const indentAdded = '  + ';
  const newline = '\n';

  const iter = (index, acc, keys) => {
    if (index > allKeys.length - 1) {
      return `${acc}\n}`;
    }

    const [current, ...rest] = keys;
    const nextIter = lineForAcc => iter(index + 1, `${acc}${newline}${lineForAcc}`, rest);

    if (keys1.has(current) && !keys2.has(current)) {
      const line = `${indentRemoved}${current}: ${obj1[current]}`;
      return nextIter(line);
    }

    if (!keys1.has(current) && keys2.has(current)) {
      const line = `${indentAdded}${current}: ${obj2[current]}`;
      return nextIter(line);
    }

    if (obj1[current] === obj2[current]) {
      const line = `${indentSame}${current}: ${obj2[current]}`;
      return nextIter(line);
    }

    const line = `${indentAdded}${current}: ${obj2[current]}${newline}${indentRemoved}${current}: ${obj1[current]}`;
    return nextIter(line);
  };

  return allKeys.length === 0 ? '{}' : iter(0, '{', allKeys);
};

const genDiff = (filepath1, filepath2) => {
  const config1 = new Config(filepath1);
  const config2 = new Config(filepath2);
  const jsObj1 = config1.parse();
  const jsObj2 = config2.parse();
  return buildString(jsObj1, jsObj2);
};

export default genDiff;
