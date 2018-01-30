const diffBuilder = (obj1, obj2) => {
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

export default diffBuilder;
