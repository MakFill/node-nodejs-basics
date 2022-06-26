import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split('').reverse().join('').trim() + '\n');
    },
  });

  //   stdin.pipe(transformStream).pipe(stdout);

  pipeline(stdin, transformStream, stdout, console.log);
};

transform();
