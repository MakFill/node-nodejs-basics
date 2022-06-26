import { existsSync, createWriteStream } from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
  if (!existsSync(filePath)) {
    const writeStream = createWriteStream(filePath, { flags: 'wx' });
    writeStream.write('I am fresh and young');
  } else {
    throw new Error('FS operation failed');
  }
};

create();
