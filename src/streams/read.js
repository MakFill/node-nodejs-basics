import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  const readStream = createReadStream(filePath, { encoding: 'utf-8' });

  readStream.pipe(stdout);
};

read();
