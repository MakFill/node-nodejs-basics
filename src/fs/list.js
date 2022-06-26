import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { stdout } from 'process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
  const folder = path.resolve(__dirname, 'files');

  if (existsSync(folder)) {
    for (const file of await readdir(folder)) {
      stdout.write(file + '\n');
    }
  } else {
    throw new Error('FS operation failed');
  }
};

list();
