const pool = require('../db');

const toDoController = {
  async createToDo(req, res, next) {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: 'Task is not valid' });
    }
    
    try {
      const result = await pool.query(
        'INSERT INTO todos (task) VALUES ($1) RETURNING *',
        [task]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating task', error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  },

  async getToDos(req, res, next) {
    try {
      const result = await pool.query('SELECT * FROM todos');

      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching tasks', error);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },

  async updateToDo(req, res, next) {
    const { isCompleted } = req.body;
    const { id } = req.params;

    if (typeof isCompleted !== 'boolean') {
      return res.status(500).json({ error: 'isCompleted must be a boolean' });
    }
    
    try {
      const result = await pool.query(
        'UPDATE todos SET isCompleted = $1 WHERE id = $2 RETURNING *',
        [isCompleted, id]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating task', error);
      res.status(500).json({ error: 'Failed to update task' });
    }
  },

  async deleteToDo(req, res, next) {
    const { id } =  req.params;
    
    try {
      const result = await pool.query(
        'DELETE FROM todos WHERE id = $1 RETURNING *',
        [id]
      );

      res.status(200).json({ message: 'Task deleted', deletedTask: result.rows[0] });
    } catch (error) {
      console.error('Error deleting task', error);
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
};

module.exports = toDoController;