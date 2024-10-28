const pool = require('../db');

const toDoController = {
  async createToDo(req, res, next) {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: 'Task content is required' });
    }

    try {
      const result = await pool.query(
        'INSERT INTO todos (task, isCompleted, created_at) VALUES ($1, $2, NOW()) RETURNING *',
        [task, false]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding task', error);
      res.status(500).json({ error: 'Failed to add task' });
    }
  },
  
  async getToDos(req, res, next) {
    try {
      const result = await pool.query('SELECT * FROM todos');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error getting tasks', error);
      res.status(500).json({ error: 'Failed to get tasks' })
    }
  },

  async updateToDo(req, res, next) {
    const { id } = req.params;
    const { isCompleted } = req.body;

    if (typeof isCompleted !== 'boolean') {
      return res.status(400).json({ error: 'isCompleted must be a boolean' });
    }

    try {
      const result = await pool.query(
        'UPDATE todos SET isCompleted = $1 WHERE id = $2 RETURNING *',
        [isCompleted, id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating task', error);
      res.status(500).json({ error: 'Failed to update task' });
    }
  },

  async deleteToDo(req, res, next) {
    const { id } = req.params;

    try {
      const result = await pool.query(
        'DELETE FROM todos WHERE id = $1 RETURNING *',
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Task not found'});
      }

      res.status(200).json({ message: 'Task deleted successfully', deletedTask: result.rows[0] });
    } catch (error) {
      console.error('Error deleting task', error);
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
};

module.exports = toDoController;