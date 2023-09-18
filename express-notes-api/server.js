// read modify write send

import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

async function readData() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function updateFile(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const notesArray = [];
    const data = await readData();
    for (const note in data.notes) {
      notesArray.push(data.notes[note]);
    }
    res.json(notesArray);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const data = await readData();
    if (Number(noteId) < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (data.notes[noteId] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${noteId}` });
    }
    res.json(data.notes[noteId]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post('/api/notes', async (req, res) => {
  const content = req.body.content;
  try {
    const data = await readData();
    const id = data.nextId;
    if (!content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const note = {
      content,
      id,
    };
    data.notes[id] = note;
    res.status(201).json(data.notes[id]);
    data.nextId++;
    await updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data = await readData();
    if (Number(id) < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete data.notes[id];
    res.sendStatus(204);
    await updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const content = req.body.content;
  try {
    const data = await readData();
    if (Number(id) < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    const note = {
      content,
      id: Number(id),
    };
    data.notes[id] = note;
    res.status(200).json(data.notes[id]);
    await updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080!');
});
