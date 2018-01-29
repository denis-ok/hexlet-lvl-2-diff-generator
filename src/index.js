import commander from 'commander';

const program = commander;

program
  .version('0.0.1')
  .description('This program take two config files as arguments and show difference')
  .option('-f, --format [type]', 'Output file format')
  .arguments('<file1> <file2>')
  .action(() => console.log('Action...'));

const launch = () => program.parse(process.argv);

export default launch;
