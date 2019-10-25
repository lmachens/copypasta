const { MongoClient } = require("mongodb");

let db = null;
async function initDatabase(url, dbName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error("You have to initialize the database first");
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
