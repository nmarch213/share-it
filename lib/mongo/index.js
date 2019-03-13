// eslint-disable-next-line prefer-destructuring
const MongoClient = require('mongodb').MongoClient;

if (!process.env.MONGO_URI) {
  throw new Error('Missing env MONGODB_URI');
}
let client = null;
module.exports = function getDb() {
  if (client && !client.isConnected) {
    client = null;
    console.log('[mongo] client discard');
  }
  if (client === null) {
    client = new MongoClient(process.env.MONGODB_URI);
    console.log('[mongo] client init');
  } else if (client.isConnected) {
    console.log('[mongo] client connected, quick return');
    return client.db('chat');
  }
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        client = null;
        console.error('[mongo] client err', err);
        return reject(err);
      }
      console.log('[mongo] connected');
      resolve(client.db('chat'));
      return null;
    });
  });
};
