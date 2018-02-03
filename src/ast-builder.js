/* eslint-disable no-use-before-define, brace-style */
import _ from 'lodash';


const getAllkeys = (obj1, obj2) => _.union(_.keys(obj1), _.keys(obj2));

const bothObjects = (a, b) => _.isObject(a) && _.isObject(b);

const buildKeyInfo = (keyName, value1, value2) => {
  if (bothObjects(value1, value2)) {
    return {
      name: keyName,
      type: 'object',
      valueOld: null,
      valueNew: null,
      valueDeep: buildAst(value1, value2),
    };
  }
  else if (value1 === value2) {
    return {
      name: keyName,
      type: 'unmodified',
      valueOld: value1,
      valueNew: value2,
      valueDeep: null,
    };
  }
  else if (!value1) {
    return {
      name: keyName,
      type: 'added',
      valueOld: null,
      valueNew: value2,
      valueDeep: null,
    };
  }
  else if (!value2) {
    return {
      name: keyName,
      type: 'removed',
      valueOld: value1,
      valueNew: null,
      valueDeep: null,
    };
  }
  return {
    name: keyName,
    type: 'modified',
    valueOld: value1,
    valueNew: value2,
    valueDeep: null,
  };
};


const buildAst = (cfg1, cfg2) => {
  const allKeys = getAllkeys(cfg1, cfg2);
  const result = allKeys.map(key => buildKeyInfo(key, cfg1[key], cfg2[key]));
  return result;
};

export default buildAst;
