import { readFile } from 'node:fs/promises';

const contents = await readFile('dijkstra.txt', { encoding: 'utf8' });
console.log(contents);
