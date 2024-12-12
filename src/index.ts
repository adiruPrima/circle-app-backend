import express, { Request, Response } from 'express';
import 'dotenv/config';
import router from './routes/v1';

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
