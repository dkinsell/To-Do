import { Request, Response, NextFunction } from 'express';
import pool from '../db';

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { task } = req.body;
    const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const result = await pool.query(
      'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
      [completed, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};
