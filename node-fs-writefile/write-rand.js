import { writeFile } from 'node:fs/promises';

const data = Math.random().toString() + '\n';

try {
  await writeFile('random.txt', data, 'utf8');
} catch (error) {
  console.log(error.message);
}
