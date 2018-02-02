import _ from 'lodash';
import buildAst from '../ast-builder';


const indent = '  ';
const markRemove = '- ';
const markAdd = '+ ';
const newline = '\n';
const getIndent = num => _.repeat(indent, num);

const printObj = (obj, level) => {
  const keys = Object.keys(obj);

  const result = keys.map((k) => {
    const value = obj[k];

    if (_.isObject(value)) {
      return `${newline}${getIndent(level + 1)}${indent}${k}: ${printObj(value, level + 1)}`;
    }

    return `${newline}${getIndent(level + 1)}${indent}${k}: ${value}`;
  });

  return `{${result.join('')}${newline}${getIndent(level)}}`;
};

const defaultAction = (obj, level, mark) => {
  const { name, valueNew, valueOld } = obj;
  const value = !valueOld ? valueNew : valueOld;
  const action = _.isObject(value) ? printObj(value, level + 1) : value;
  return `${getIndent(level)}${mark}${name}: ${action}${newline}`;
};

const actionUnmodified = (obj, level) => defaultAction(obj, level, indent);
const actionAdded = (obj, level) => defaultAction(obj, level, markAdd);
const actionRemoved = (obj, level) => defaultAction(obj, level, markRemove);

const actionModified = (obj, level) => {
  const { name, valueNew, valueOld } = obj;
  return `${getIndent(level)}${markAdd}${name}: ${valueNew}${newline}${getIndent(level)}${markRemove}${name}: ${valueOld}${newline}`;
};

const actionModifiedDeepObj = (obj, level, func) => {
  const { name, valueDeep } = obj;
  return `${getIndent(level)}${indent}${name}: ${func(valueDeep, level + 1)}${newline}`;
};

const actions = {
  modified: actionModified,
  unmodified: actionUnmodified,
  added: actionAdded,
  removed: actionRemoved,
  modifiedDeepObj: actionModifiedDeepObj,
};

const buildDiffString = (ast, level = 0) => {
  const result = ast.map((obj) => {
    const { type } = obj;
    const action = actions[type];
    return action(obj, level + 1, buildDiffString);
  });

  return `{${newline}${result.join('')}${getIndent(level)}}`;
};

const buildDiff = (obj1, obj2) => buildDiffString(buildAst(obj1, obj2));

export default buildDiff;
