import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import toDoRoutes from './routes/toDoRoutes';
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

app.use('/', toDoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 
  res.status(500).json({ error: err.message }); 
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});