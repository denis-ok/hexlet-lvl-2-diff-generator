import buildAst from '../ast-builder';
import defaultR from './default';
import plainR from './plain';


const renderers = {
  default: defaultR,
  plain: plainR,
};

const getRenderer = format => renderers[format];

const render = (obj1, obj2, format = 'default') => {
  const ast = buildAst(obj1, obj2);
  return getRenderer(format)(ast);
};

export default render;
