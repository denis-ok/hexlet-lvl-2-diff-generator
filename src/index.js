import fs from 'fs';

const jsonDiff = (path1, path2) => {
  const obj1 = JSON.parse(fs.readFileSync(path1));
  const keys1 = new Set(Object.keys(obj1));

  const obj2 = JSON.parse(fs.readFileSync(path2));
  const keys2 = new Set(Object.keys(obj2));

  const allKeys = Object.keys({ ...obj1, ...obj2 });

  const areEmpty = allKeys.length === 0;

  const generateString = allKeys.reduce((acc, key, index) => {
    const indentSame = '    ';
    const indentRemoved = '  - ';
    const indentAdded = '  + ';
    const newline = '\n';
    const end = '\n}';

    const isEnd = index === allKeys.length - 1;

    if (keys1.has(key) && !keys2.has(key)) {
      const line = `${newline}${indentRemoved}${key}: ${obj1[key]}`;
      return isEnd ? `${acc}${line}${end}` : `${acc}${line}`;
    }

    if (!keys1.has(key) && keys2.has(key)) {
      const line = `${newline}${indentAdded}${key}: ${obj2[key]}`;
      return isEnd ? `${acc}${line}${end}` : `${acc}${line}`;
    }

    if (obj1[key] === obj2[key]) {
      const line = `${newline}${indentSame}${key}: ${obj2[key]}`;
      return isEnd ? `${acc}${line}${end}` : `${acc}${line}`;
    }

    const line = `${newline}${indentAdded}${key}: ${obj2[key]}${newline}${indentRemoved}${key}: ${obj1[key]}`;
    return isEnd ? `${acc}${line}${end}` : `${acc}${line}`;
  }, '{');

  return areEmpty ? '{}' : generateString;
};

export default jsonDiff;
