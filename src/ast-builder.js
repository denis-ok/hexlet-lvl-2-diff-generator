/* eslint-disable no-use-before-define, brace-style */
import _ from 'lodash';


const getAllkeys = (o1, o2) => Object.keys({ ...o1, ...o2 });
const bothObjects = (a, b) => _.isObject(a) && _.isObject(b);

const buildKey = (name, type, valueOld, valueNew, valueDeep) => ({
  name, type, valueOld, valueNew, valueDeep,
});


const buildKeyInfo = (key, value1, value2) => {
  if (bothObjects(value1, value2)) {
    return buildKey(key, 'object', null, null, buildAst(value1, value2));
  }
  else if (value1 === value2) {
    return buildKey(key, 'unmodified', value1, value2, null);
  }
  else if (!value1) {
    return buildKey(key, 'added', null, value2, null);
  }
  else if (!value2) {
    return buildKey(key, 'removed', value1, null, null);
  }

  return buildKey(key, 'modified', value1, value2, null);
};


const buildAst = (cfg1, cfg2) => {
  const allKeys = getAllkeys(cfg1, cfg2);
  const result = allKeys.map(key => buildKeyInfo(key, cfg1[key], cfg2[key]));
  return result;
};

export default buildAst;
