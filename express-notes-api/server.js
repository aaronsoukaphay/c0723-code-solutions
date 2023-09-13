// read modify write send

import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

async function readData() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function updateFile(data) {
  await writeFile('data.json', JSON.stringify(data));
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
  try {
    const data = await readData();
    const noteId = req.params.id;
    const errorMessage = { error: `cannot find note with id ${noteId}` };
    if (Number(noteId) < 0) {
      res.sendStatus(400);
      return;
    }
    for (const note in data.notes) {
      if (note === noteId) {
        res.json(data.notes[note]);
        return;
      }
    }
    res.status(404).json(errorMessage);
  } catch (error) {
    console.log(error.message);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const info = req.body;
    data.notes[data.nextId] = info;
    data.notes[data.nextId].id = data.nextId;
    res.status(201).json(data.notes[data.nextId]);
    data.nextId++;
    updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = req.params.id;
    if (Number(id) < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (id in data.notes === false) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    if (id in data.notes) {
      delete data.notes[id];
      res.sendStatus(204);
    }
    updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = req.params.id;
    if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    if (id in data.notes === false) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete data.notes[id].content;
    data.notes[id] = req.body;
    data.notes[id].id = id;
    res.status(200).json(data.notes[id]);
    updateFile(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080!');
});
