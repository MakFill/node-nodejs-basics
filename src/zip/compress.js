import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const compress = async () => {
  const sourcePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const destPath = path.resolve(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destPath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

compress();
