import _ from 'lodash';


const getAllkeys = (o1, o2) => Object.keys({ ...o1, ...o2 });
const getType = obj => Object.prototype.toString.call(obj);

const isSimple = value => !_.isObject(value) && !_.isArray(value);
const differentTypes = (a, b) => getType(a) !== getType(b);
const bothObjects = (a, b) => _.isObject(a) && _.isObject(b);
const bothSimple = (a, b) => isSimple(a) && isSimple(b);

const buildKey = (name, type, valueOld, valueNew, valueDeep) => ({
  name, type, valueOld, valueNew, valueDeep,
});

const buildKeyInfo = (key, obj1, obj2) => {
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (_.isEqual(value1, value2)) {
    return buildKey(key, 'unmodified', value1, value2, null);
  }

  if (!value1) {
    return buildKey(key, 'added', null, value2, null);
  }

  if (!value2) {
    return buildKey(key, 'removed', value1, null, null);
  }

  if (differentTypes(value1, value2) || bothSimple(value1, value2)) {
    return buildKey(key, 'modified', value1, value2, null);
  }

  if (bothObjects(value1, value2)) {
    const newKeys = getAllkeys(value1, value2);
    return buildKey(key, 'modifiedDeepObj', null, null, newKeys.map(k => buildKeyInfo(k, value1, value2)));
  }

  return false;
};

const buildAst = (cfg1, cfg2) => {
  const allKeys = getAllkeys(cfg1, cfg2);
  const result = allKeys.map(key => buildKeyInfo(key, cfg1, cfg2));
  return result;
};

export default buildAst;

