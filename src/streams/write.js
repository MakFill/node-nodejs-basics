import { createWriteStream } from 'fs';
import { stdin } from 'process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = createWriteStream(filePath, { flags: 'a+' });

  stdin.pipe(writeStream);
};

write();
