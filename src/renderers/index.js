import defaultR from './default';
import plainR from './plain';


const renderers = {
  default: defaultR,
  plain: plainR,
};

const getRenderer = format => renderers[format];

const render = (ast, format = 'default') => getRenderer(format)(ast);


export default render;
