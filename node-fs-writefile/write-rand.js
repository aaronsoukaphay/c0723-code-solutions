import { writeFile } from 'node:fs/promises';

const data = Math.random();

try {
  await writeFile('random.txt', data + '\n');
} catch (error) {
  console.log(error.message);
}
