import express from 'express';

const app = express();

app.get('/api/grades', (req, res) => {
  const scores = [];
  for (const key in grades) {
    scores.push(grades[key]);
  }
  res.json(scores);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};
