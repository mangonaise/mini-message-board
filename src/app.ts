import path from 'path';
import express from 'express';
import indexRouter from './routes/index';

export type Message = {
  user: string,
  text: string,
  date: Date
}

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(process.env.PORT || '3000', () => console.log('Server running'));