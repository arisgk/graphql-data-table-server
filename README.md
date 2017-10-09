# Data Table GraphQL Server

GraphQL server built using [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) and [Apollo Server](https://github.com/apollographql/apollo-server).

## Development
Create an `.env` file in project root to register the following required environment variables:
* `MONGODB_URI` - MongoDB connection URI

### Server

To start the server run:
```
npm install
node index.js
```

You can use [Nodemon](https://github.com/remy/nodemon) to automatically restart the server when changes are detected:

```
npm install
npm install -g nodemon
nodemon
```

### Data Store
[MongoDB](https://www.mongodb.com/) is used as a data store.
