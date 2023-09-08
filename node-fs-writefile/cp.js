import { readFile, writeFile } from 'node:fs/promises';

const copyFrom = process.argv[2];
const copyTo = process.argv[3];

try {
  const copiedContents = await readFile(copyFrom, 'utf8');
  await writeFile(copyTo, copiedContents, 'utf8');
} catch (error) {
  console.log(error.message);
}
