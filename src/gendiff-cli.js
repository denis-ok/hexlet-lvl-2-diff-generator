import program from 'commander';
import jsonDiff from './';


program
  .version('0.0.1')
  .description('This program take two config files as arguments and show difference')
  .option('-f, --format [type]', 'Output file format')
  .arguments('<file1> <file2>')
  .action((file1, file2) => console.log(jsonDiff(file1, file2)));


const launch = () => program.parse(process.argv);


export default launch;
