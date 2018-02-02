/* eslint-disable object-curly-newline */
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

const buildDiffString = (ast, level = '') => {
  const result = ast.map((obj) => {
    const { name, type, valueNew, valueOld, valueDeep } = obj;
    const newLevel = level === '' ? name : `${level}.${name}`;

    const actionRemoved = () => `${property} '${newLevel}' ${wasRemoved}${newline}`;
    const actionUnmodified = () => '';
    const actionModified = () => `${property} '${newLevel}' ${wasUpdated} ${from} '${valueOld}' ${to} '${valueNew}'${newline}`;
    const actionModifiedDeepObj = () => `${buildDiffString(valueDeep, `${newLevel}`)}`;

    const actionAdded = () => {
      if (_.isObject(valueNew)) {
        return `${property} '${newLevel}' ${wasAddedWith} ${compexValue}${newline}`;
      }

      return `${property} '${newLevel}' ${wasAddedWith} ${value} '${valueNew}'${newline}`;
    };

    const actions = {
      modified: actionModified,
      unmodified: actionUnmodified,
      added: actionAdded,
      removed: actionRemoved,
      modifiedDeepObj: actionModifiedDeepObj,
    };

    const makeAction = actions[type];

    return makeAction();
  });

  return result.join('');
};

export default buildDiffString;
