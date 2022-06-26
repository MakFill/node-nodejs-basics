import { fork } from 'node:child_process';
import { pipeline } from 'stream';
import path from 'path';
import * as url from 'url';
import { stdin, stdout } from 'process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const scriptPath = path.resolve(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
  const cp = fork(scriptPath, args, { silent: true });

  pipeline(stdin, cp.stdin, console.log);
  pipeline(cp.stdout, stdout, console.log);
};

spawnChildProcess(['a', 'b', 'c', 'd']);
