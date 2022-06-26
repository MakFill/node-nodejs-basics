import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const workerPath = path.resolve(__dirname, 'worker.js');

export const performCalculations = async () => {
  const threadsAmount = cpus();
  let counter = 10;
  const results = await Promise.allSettled(
    threadsAmount.map(
      () =>
        new Promise((res, rej) => {
          const worker = new Worker(workerPath, { workerData: counter++ });
          worker.on('message', (data) => res(data));
          worker.on('error', (error) => rej(error));
        })
    )
  );

  return results.map((item) => ({
    status: item.status === 'fulfilled' ? 'resolved' : 'error',
    data: item.value ? item.value : null,
  }));
};

console.log(await performCalculations());
