import { existsSync, createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const file = path.resolve(__dirname, 'files', 'fileToRead.txt');

  if (existsSync(file)) {
    const readStream = createReadStream(file);
    // readStream.on('data', (data) => {
    //   stdout.write(data);
    // });
    readStream.pipe(stdout);
  } else {
    throw new Error('FS operation failed');
  }
};

read();
