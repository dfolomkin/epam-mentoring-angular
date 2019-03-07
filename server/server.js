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

server.get('/api/courses/count', (req, res) => {
  const courses = JSON.parse(fs.readFileSync('./db.json', 'utf8')).courses;

  res.send({ count: courses.length });
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
    res.send({
      login: req.body.login,
      password: req.body.password,
      token
    });
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
    res.status(200).send();
  } else {
    res.status(401);
  }
});

// getCurrentAuthPair
server.get('/api/auth', (req, res) => {
  const authData = JSON.parse(fs.readFileSync('./db.json', 'utf8')).authData;
  const item =
    req.headers.token &&
    authData.find(item => item.token === req.headers.token);
  if (item) {
    res.send({ login: item.login, password: item.password, token: item.token });
  } else {
    res.status(401);
  }
});

server.use('/api', router);

const port = 3000;

server.listen(port, () => {
  console.log('JSON Server is running');
});
