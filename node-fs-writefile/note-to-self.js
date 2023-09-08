import { writeFile } from 'node:fs/promises';

const data = process.argv[2] + '\n';

try {
  await writeFile('note.txt', data, 'utf8');
} catch (error) {
  console.log(error.message);
}
