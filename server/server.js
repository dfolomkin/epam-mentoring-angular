const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/api/courses', (req, res) => {
  const isEmpty = require('./utils.js').isEmpty;
  let courses = require('./db.json').courses;

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

server.use(jsonServer.bodyParser);
server.use('/api', router);

const port = 3000;

server.listen(port, () => {
  console.log('JSON Server is running');
});
