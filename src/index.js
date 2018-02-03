import fs from 'fs';
import path from 'path';
import getParser from './parsers';
import buildAst from './ast-builder';
import render from './renderers';


const getData = filepath => fs.readFileSync(filepath, 'utf8');
const getExt = filepath => path.extname(filepath).slice(1);
const parse = (ext, data) => getParser(ext)(data);

const genDiff = (filepath1, filepath2, format) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const ext1 = getExt(filepath1);
  const ext2 = getExt(filepath2);

  const jsObj1 = parse(ext1, data1);
  const jsObj2 = parse(ext2, data2);

  const ast = buildAst(jsObj1, jsObj2);

  return render(ast, format);
};


export default genDiff;
