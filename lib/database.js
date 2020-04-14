const { MongoClient } = require('mongodb');

let client = null;
let db = null;
async function initDatabase(url, dbName) {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
}

async function closeDatabase() {
  await client.close();
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error('You have to initialize the database first');
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.closeDatabase = closeDatabase;
exports.getCollection = getCollection;
