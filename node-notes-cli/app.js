import { readFile, writeFile } from 'node:fs/promises';

const parsedJSON = JSON.parse(await readFile('data.json', 'utf8'));

const keyword = process.argv[2];

async function updateFile() {
  await writeFile('data.json', JSON.stringify(parsedJSON));
}

function read() {
  for (const key in parsedJSON.notes) {
    console.log(`${key}: ${parsedJSON.notes[key]}`);
  }
}

function create() {
  const newNote = process.argv[3];
  parsedJSON.notes[parsedJSON.nextId] = newNote;
  parsedJSON.nextId++;
  updateFile();
}

function update() {
  const [entryId, updatedNote] = process.argv.slice(3);
  parsedJSON.notes[entryId] = updatedNote;
  updateFile();
}

function remove() {
  const entryId = process.argv[3];
  delete parsedJSON.notes[entryId];
  updateFile();
}

try {
  keyword === 'read' && (await read());
  keyword === 'create' && (await create());
  keyword === 'update' && (await update());
  keyword === 'delete' && (await remove());
} catch (error) {
  console.log(error.message);
}
