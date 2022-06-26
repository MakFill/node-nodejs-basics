import { env, stdout } from 'process';

env.RSS_FIRST_VARIABLE = 'First Variable';
env.RSS_SECOND_VARIABLE = 'Second Variable';

export const parseEnv = () => {
  const entries = Object.entries(env);
  entries.forEach(([key, value]) => {
    if (key.startsWith('RSS_')) {
      stdout.write(`${key}=${value}\n`);
    }
  });
};

parseEnv();
