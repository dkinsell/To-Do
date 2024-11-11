const pool = require('../db');

const toDoController = {
  async createToDo(req, res, next) {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: 'Not a valid task' });
    }
    
    try {
      const result = await pool.query(
        'INSERT INTO todos (task) VALUES ($1) RETURNING *;',
        [task]
      )

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Failed to create task', error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  async getToDos(req, res, next) {
    try {
      const result = await pool.query('SELECT * FROM todos;');

      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Failed to get tasks', error);
      res.status(500).json({ error: 'Failed to get tasks' });
    }
  },

  async updatedToDo(req, res, next) {
    const { isCompleted } = req.body;
    const { id } = req.params;
    
    if (typeof isCompleted !== 'boolean') {
      return res.status(400).json({ error: 'isCompleted must be boolean' });
    }
    
    try {
      const result = await pool.query(
        'UPDATE todos SET "isCompleted" = $1 WHERE id = $2 RETURNING *;',
        [isCompleted, id]
      );
        

      res.status(200).json(result.rows[0])
    } catch (error) {
      console.error('Failed to update task', error);
      res.status(500).json({ error: 'Failed to update task' });
    }
  },  

  async deleteToDo(req, res, next) {
    const { id } = req.params;
    
    try {
      const result = await pool.query(
        'DELETE FROM todos WHERE id = $1 RETURNING *;',
        [id]
      )

      res.status(200).json({ deletedTask: result.rows[0] });
    } catch (error) {
      console.error('Failed to delete task', error);
      res.status(500).json({ error: 'Failed to delete task' });
    }
  },
}

module.exports = toDoController;