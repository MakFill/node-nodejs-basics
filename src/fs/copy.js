import { existsSync } from 'fs';
import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const copy = async () => {
  const sourcePath = path.resolve(__dirname, 'files');
  const destPath = path.resolve(__dirname, 'files_copy');

  if (!existsSync(destPath) && existsSync(sourcePath)) {
    await mkdir(destPath, { recursive: true }, console.log);
    const files = await readdir(sourcePath);
    for (const file of files) {
      await copyFile(`${sourcePath}/${file}`, `${destPath}/${file}`);
    }
  } else {
    throw new Error('FS operation failed');
  }
};

copy();
