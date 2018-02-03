/* eslint-disable object-curly-newline, no-use-before-define */
import _ from 'lodash';

const property = 'Property';
const wasRemoved = 'was removed';
const wasAddedWith = 'was added with';
const wasUpdated = 'was updated';
const from = 'from';
const to = 'to';
const compexValue = 'complex value';
const value = 'value:';
const newline = '\n';

const makeAction = (obj, level) => {
  const { name, type, valueNew, valueOld, valueDeep } = obj;
  const newLevel = level === '' ? name : `${level}.${name}`;

  const typeToString = {
    object: () => `${buildDiffString(valueDeep, `${newLevel}`)}`,

    unmodified: () => '',

    removed: () => `${property} '${newLevel}' ${wasRemoved}${newline}`,

    modified: () => `${property} '${newLevel}' ${wasUpdated} ${from} '${valueOld}' ${to} '${valueNew}'${newline}`,

    added: () => {
      if (_.isObject(valueNew)) {
        return `${property} '${newLevel}' ${wasAddedWith} ${compexValue}${newline}`;
      }
      return `${property} '${newLevel}' ${wasAddedWith} ${value} '${valueNew}'${newline}`;
    },
  };

  const action = typeToString[type];
  return action();
};


const buildDiffString = (ast, level = '') => {
  const arrDiff = ast.map(obj => makeAction(obj, level));
  return arrDiff.join('');
};


export default buildDiffString;
