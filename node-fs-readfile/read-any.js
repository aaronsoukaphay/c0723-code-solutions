import { readFile } from 'node:fs/promises';

try {
  const contents = await readFile(process.argv[2], 'utf8');
  console.log(contents);
} catch (error) {
  console.log(error.message);
}
