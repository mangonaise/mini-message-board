import { formatDistanceToNow } from 'date-fns';
import handlebars from 'hbs';
import express from 'express';

type Message = {
  user: string,
  text: string,
  date: Date
}

const router = express.Router();

handlebars.registerHelper('format', date => formatDistanceToNow(date, { addSuffix: true }));

const messages: Message[] = [
  {
    user: 'walter',
    text: 'i am the one who knocks',
    date: new Date(Date.now() - 120000)
  },
  {
    user: 'jesse',
    text: 'stop knocking. this is my own private domicile and i will not be harassed',
    date: new Date(Date.now() - 60000)
  },
  {
    user: 'walter jr',
    text: 'guys i want breakfast',
    date: new Date()
  },
]

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  const { user, text } = req.body;

  if (user && text) {
    messages.push({
      text,
      user,
      date: new Date()
    });
  }

  res.redirect('/');
})

export default router;