import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';
import diffBuilder from './diff-builder';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  ini: ini.parse,
};


const getData = filepath => fs.readFileSync(filepath, 'utf8');
const getExt = filepath => path.extname(filepath).slice(1);
const getParser = filepath => parsers[getExt(filepath)];
const parse = (parser, data) => parser(data);


const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const jsObj1 = parse(getParser(filepath1), data1);
  const jsObj2 = parse(getParser(filepath2), data2);

  return diffBuilder(jsObj1, jsObj2);
};


export default genDiff;
