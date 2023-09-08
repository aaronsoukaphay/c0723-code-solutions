import { readFile } from 'node:fs/promises';

try {
  const fileNames = process.argv.slice(2);

  const arrayFileNames = fileNames.map((file) => readFile(file, 'utf8'));

  const contents = await Promise.all(arrayFileNames);

  contents.forEach((element) => console.log(element));
} catch (error) {
  console.log(error.message);
}
