import { stdout, argv } from 'process';

export const parseArgs = () => {
  const args = argv.slice(2);
  args.forEach((arg, index) => {
    if (arg.startsWith('--')) {
      stdout.write(`${arg.slice(2)} is ${args[index + 1]}\n`);
    }
  });
};

parseArgs();
