import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  ini: ini.parse,
};

const getExt = filepath => path.extname(filepath).slice(1);
const getParser = filepath => parsers[getExt(filepath)];
const parse = (filepath, data) => getParser(filepath)(data);

export default parse;
