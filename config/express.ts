import express, { Express } from 'express';
import morgan from 'morgan';
import routes from '../routes/posts.routes';
import cors from 'cors';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use('/api', routes);

export default app;
