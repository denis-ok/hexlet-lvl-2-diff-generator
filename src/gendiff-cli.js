import program from 'commander';
import genDiff from './';


program
  .version('0.6.1')
  .description('This program take two config files as arguments and show difference')
  .option('-f, --format [type]', 'Output file format')
  .arguments('<file1> <file2>')
  .action((file1, file2) => console.log(genDiff(file1, file2, program.format)));


const launch = () => program.parse(process.argv);


export default launch;
