import { Worker, workerData, parentPort, isMainThread } from 'node:worker_threads';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const workerPath = path.resolve(__dirname, 'worker.js');

// if (isMainThread) {
//   const worker = new Worker(workerPath, {
//     workerData: 5,
//   });

//   worker.on('message', console.log);
// } else {
//   // n should be received from main thread
//   const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

//   const sendResult = () => {
//     // This function sends result of nthFibonacci computations to main thread
//     parentPort.postMessage(nthFibonacci(workerData));
//   };

//   sendResult();
// }

// n should be received from main thread
export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(nthFibonacci(workerData));
};
sendResult();
