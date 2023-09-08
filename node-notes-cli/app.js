import { readFile, writeFile } from 'node:fs/promises';

try {
  const content = await readFile('data.json', 'utf8');
  const parsedJSON = JSON.parse(content);
  for (const [key, value] of Object.entries(parsedJSON.notes)) {
    process.argv[2] === 'read' && console.log(`${key}: ${value}`);
  }

  const [keyword, note] = process.argv.slice(2);
  if (keyword === 'create') {
    parsedJSON.notes[parsedJSON.nextId] = note;
    parsedJSON.nextId++;
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    writeFile('data.json', stringifyJSON);
  }

  const [update, selectedId, message] = process.argv.slice(2);
  if (update === 'update') {
    parsedJSON.notes[selectedId] = message;
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    writeFile('data.json', stringifyJSON);
  }

  const [deletekeyword, deletedId] = process.argv.slice(2);
  if (deletekeyword === 'delete') {
    delete parsedJSON.notes[deletedId];
    const stringifyJSON = JSON.stringify(parsedJSON, null, 2);
    writeFile('data.json', stringifyJSON);
  }
  // node app.js delete 5
} catch (error) {
  console.log(error.message);
}
