import { createReadStream } from 'fs';
import { createHmac } from 'crypto';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const secret = 'secret';

export const calculateHash = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readStream = createReadStream(filePath, { encoding: 'utf-8' });
  readStream.on('data', (data) => {
    const hash = createHmac('sha256', secret).update(data).digest('hex');
    process.stdout.write(hash);
    readStream.destroy();
  });
};

calculateHash();
