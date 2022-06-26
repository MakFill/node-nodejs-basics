import { existsSync } from 'fs';
import { rename as renameFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const rename = async () => {
  const oldFile = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const newFile = path.resolve(__dirname, 'files', 'properFilename.md');

  if (!existsSync(newFile) && existsSync(oldFile)) {
    await renameFile(oldFile, newFile);
  } else {
    throw new Error('FS operation failed');
  }
};

rename();
