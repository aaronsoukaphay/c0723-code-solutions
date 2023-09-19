import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

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
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.json(grade);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateParams(name, course, score);
    const sql = `
      insert into "grades" ("name", "course", "score")
        values($1, $2, $3)
        returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grades = result.rows[0];
    res.status(201).json(grades);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const { name, course, score } = req.body;
    validateGradeId(gradeId);
    validateParams(name, course, score);
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
    const grades = result.rows[0];
    validateGrade(grades, gradeId);
    res.json(grades);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    validateGradeId(gradeId);
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    validateGrade(grade, gradeId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

function validateGradeId(gradeId) {
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    throw new ClientError(400, 'gradeId must be a positive integer');
  }
}

function validateGrade(grade, gradeId) {
  if (!grade) {
    throw new ClientError(404, `cannot find grade with the gradeId ${gradeId}`);
  }
}

function validateParams(name, course, score) {
  if (!name) {
    throw new ClientError(400, 'name is required');
  }
  if (!course) {
    throw new ClientError(400, 'course is required');
  }
  if (!score) {
    throw new ClientError(400, 'score is required');
  }
}

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
