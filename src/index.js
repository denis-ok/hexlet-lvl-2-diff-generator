import fs from 'fs';
import parse from './parsers';
import render from './renderers';


const getData = filepath => fs.readFileSync(filepath, 'utf8');


const genDiff = (filepath1, filepath2, format) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const jsObj1 = parse(filepath1, data1);
  const jsObj2 = parse(filepath2, data2);

  return render(jsObj1, jsObj2, format);
};


export default genDiff;
