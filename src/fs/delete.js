import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
  const fileToRemove = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  if (existsSync(fileToRemove)) {
    unlink(fileToRemove);
  } else {
    throw new Error('FS operation failed');
  }
};

remove();
