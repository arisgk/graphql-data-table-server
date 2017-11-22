const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { mongodb } = require('../databases/');
const graphqlRoute = require('./routes/graphql');
const graphiqlRoute = require('./routes/graphiql');
const errorRoute = require('./routes/error');
const cors = require('cors');

const app = express();
mongodb.connector.connect();

module.exports = (resolvers) => {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, 'build')));
  if (process.env.NODE_ENV === 'production') app.use(express.static('build'));

  const graphql = graphqlRoute.create(resolvers);
  const graphiql = graphiqlRoute.create();

  app.use('/graphql', cors(), graphql);
  app.use('/graphiql', graphiql);

  app.use(errorRoute);

  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: '/build' });
  });

  return app;
};
