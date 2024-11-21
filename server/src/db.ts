import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'todo_app',
  port: 5432
});

export default pool;