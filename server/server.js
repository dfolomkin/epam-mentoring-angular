const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/courses', (req, res) => {
  const isEmpty = require('lodash').isEmpty;

  let courses = JSON.parse(fs.readFileSync('./db.json', 'utf8')).courses;

  if (isEmpty(req.query)) {
    res.send(courses);
  } else {
    const query = req.query.query;
    const count = req.query.count;

    if (query) {
      const lowerCasedQuery = query.toLowerCase();

      courses = courses.filter(
        item =>
          item.title.toLowerCase().indexOf(lowerCasedQuery) !== -1 ||
          item.description.toLowerCase().indexOf(lowerCasedQuery) !== -1 ||
          item.author.toLowerCase().indexOf(lowerCasedQuery) !== -1
      );
    }
    res.send([...courses.slice(0, count)]);
  }
});

// login
server.post('/api/auth', (req, res) => {
  const getSequence = require('./utils.js').getSequence;

  const db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  const authData = db.authData;

  const index = authData.findIndex(
    item => item.login === req.body.login && item.password === req.body.password
  );

  if (index !== -1) {
    const token = getSequence(14);

    db.authData[index].token = token;
    fs.writeFileSync('./db.json', JSON.stringify(db), 'utf8');
    res.send({ token });
  } else {
    res.status(401).send('Authorization has been failed!');
  }
});

// logout
server.delete('/api/auth', (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  const authData = db.authData;
  const index = req.headers.token
    ? authData.findIndex(item => item.token === req.headers.token)
    : -1;

  if (index !== -1) {
    delete db.authData[index].token;
    fs.writeFileSync('./db.json', JSON.stringify(db), 'utf8');
    res.status(200);
  } else {
    res.status(401);
  }
});

// getUserInfo and isAuthed
server.get('/api/auth', (req, res) => {
  const authData = JSON.parse(fs.readFileSync('./db.json', 'utf8')).authData;
  const item = req.headers.token
    ? authData.find(item => item.token === req.headers.token)
    : undefined;

  if (item) {
    res.send({ login: item.login, password: item.password });
  } else {
    res.status(401);
  }
});

server.use('/api', router);

const port = 3000;

server.listen(port, () => {
  console.log('JSON Server is running');
});
