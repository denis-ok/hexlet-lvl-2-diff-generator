/* eslint-disable object-curly-newline, no-use-before-define */
import _ from 'lodash';

const indent = '  ';
const markRemove = '- ';
const markAdd = '+ ';
const newline = '\n';
const getIndent = num => _.repeat(indent, num);


const objToString = (obj, level) => {
  const allKeys = Object.keys(obj);
  const result = allKeys.map((k) => {
    const value = obj[k];

    if (_.isObject(value)) {
      return `${newline}${getIndent(level + 1)}${indent}${k}: ${objToString(value, level + 1)}`;
    }

    return `${newline}${getIndent(level + 1)}${indent}${k}: ${value}`;
  });

  return `{${result.join('')}${newline}${getIndent(level)}}`;
};


const makeAction = (obj, level) => {
  const { name, type, valueNew, valueOld, valueDeep } = obj;
  const value = !valueOld ? valueNew : valueOld;

  const actionSimple = (mark) => {
    const action = _.isObject(value) ? objToString(value, level + 1) : value;
    return `${getIndent(level)}${mark}${name}: ${action}${newline}`;
  };

  const typeToString = {
    unmodified: () => actionSimple(indent),
    added: () => actionSimple(markAdd),
    removed: () => actionSimple(markRemove),

    modified: () => {
      const stringNew = `${getIndent(level)}${markAdd}${name}: ${valueNew}${newline}`;
      const stringOld = `${getIndent(level)}${markRemove}${name}: ${valueOld}${newline}`;
      return `${stringNew}${stringOld}`;
    },

    object: () => {
      const stringKey = `${getIndent(level)}${indent}${name}: `;
      const stringValue = `${buildDiffString(valueDeep, level + 1)}${newline}`;
      return `${stringKey}${stringValue}`;
    },
  };

  const action = typeToString[type];
  return action();
};


const buildDiffString = (ast, level = 0) => {
  const arrDiff = ast.map(obj => makeAction(obj, level + 1));
  return `{${newline}${arrDiff.join('')}${getIndent(level)}}`;
};


export default buildDiffString;
