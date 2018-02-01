import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  ini: ini.parse,
};

export default parsers;
