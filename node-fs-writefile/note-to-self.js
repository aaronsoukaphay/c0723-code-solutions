import { writeFile } from 'node:fs/promises';

const data = process.argv[2];

try {
  await writeFile('note.txt', data + '\n');
} catch (error) {
  console.log(error.message);
}
