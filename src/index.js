import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import diffBuilder from './diff-builder';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
};


const getData = filepath => fs.readFileSync(filepath, 'utf8');
const getExt = filepath => path.extname(filepath).slice(1);
const getParser = filepath => parsers[getExt(filepath)];


const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const jsObj1 = getParser(filepath1)(data1);
  const jsObj2 = getParser(filepath2)(data2);

  return diffBuilder(jsObj1, jsObj2);
};


export default genDiff;
