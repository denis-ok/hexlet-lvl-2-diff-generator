import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  ini: ini.parse,
};

const getParser = ext => parsers[ext];

export default getParser;
