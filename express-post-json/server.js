import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

const parseMiddleware = express.json();
app.use(parseMiddleware);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades/', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  res.status(201).send(newGrade);
  nextId++;
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
