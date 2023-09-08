import { readFile, writeFile } from 'node:fs/promises';

try {
  const content = await readFile('data.json');
  const parsedJSON = JSON.parse(content);
  for (const [key, value] of Object.entries(parsedJSON.notes)) {
    process.argv[2] === 'read' && console.log(`${key}: ${value}`);
  }

  const [createKeyword, createNote] = process.argv.slice(2);
  if (createKeyword === 'create') {
    parsedJSON.notes[parsedJSON.nextId] = createNote;
    parsedJSON.nextId++;
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    await writeFile('data.json', stringifyJSON);
  }

  const [updateKeyword, updateId, updateNote] = process.argv.slice(2);
  if (updateKeyword === 'update') {
    parsedJSON.notes[updateId] = updateNote;
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    await writeFile('data.json', stringifyJSON);
  }

  const [deletekeyword, deleteId] = process.argv.slice(2);
  if (deletekeyword === 'delete') {
    delete parsedJSON.notes[deleteId];
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    await writeFile('data.json', stringifyJSON);
  }
} catch (error) {
  console.log(error.message);
}
