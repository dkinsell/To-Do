const pool = require('../db');

const toDoController = {
  async createToDo(req, res, next) {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: 'Request did not include valid task' });
    }

    try {
      const result = await pool.query(
        'INSERT INTO todos (task) VALUES ($1) RETURNING *',
        [task]
      );

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Task was not successfully created', error);
      res.status(500).json({ error: 'Task was not created' });
    }
  },

  async getToDos(req, res, next) {
    try {
      const result = await pool.query(
        'SELECT * FROM todos'
      );

      res.status(201).json(result.rows);
    } catch (error) {
      console.error('Could not get tasks', error);
      res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
  },

  async updateToDo(req, res, next) {
    const { isCompleted } = req.body;
    const { id } = req.params;

    if (typeof isCompleted !== 'boolean') {
      return res.status(400).json({ error: 'isCompleted must be boolean' });
    }

    try {
      const result = await pool.query(
        'UPDATE todos SET isCompleted = $1 WHERE id = $2 RETURNING *',
        [isCompleted, id]
      )
      
      return res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Could not update task', error);
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

      return res.status(200).json({ message: 'Task deleted successfully', task: result.rows[0] })
    } catch (error) {
      console.error('Could not delete task', error);
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}

module.exports = toDoController;