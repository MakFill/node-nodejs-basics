import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const decompress = async () => {
  const destPath = path.resolve(__dirname, 'files', 'decompressedFile.txt');
  const sourcePath = path.resolve(__dirname, 'files', 'archive.gz');

  const source = createReadStream(sourcePath);
  const unzip = createUnzip();
  const destination = createWriteStream(destPath);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress();
