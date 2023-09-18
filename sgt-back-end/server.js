import pg from 'pg';
import express from 'express';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const params = [];
    const result = await db.query(sql, params);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Something went wrong');
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    if (!name || typeof name === 'number') {
      res.status(400).json('missing/invalid name');
      return;
    }

    if (!course || typeof course === 'number') {
      res.status(400).json('missing/invalid course');
      return;
    }

    if (!score || !Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json('missing/invalid score');
      return;
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grades = result.rows[0];
    res.status(201).json(grades);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Something went wrong');
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    if (!gradeId || !Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json('missing/invalid gradeId');
      return;
    }

    if (!name || typeof name === 'number') {
      res.status(400).json('missing/invalid name');
      return;
    }

    if (!course || typeof course === 'number') {
      res.status(400).json('missing/invalid course');
      return;
    }

    if (!score || !Number.isInteger(score) || score < 0 || score > 100) {
      res.status(400).json('missing/invalid score');
      return;
    }

    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json(`Cannot find grade with gradeId ${gradeId}`);
      return;
    }
    res.status(200).json(grade);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('something went wrong');
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);

    if (!gradeId || !Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json('missing/invalid gradeId');
      return;
    }

    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grades = result.rows[0];

    if (!grades) {
      res.status(404).json(`cannot find gradeId ${gradeId}`);
      return;
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('something went wrong');
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
