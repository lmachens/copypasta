const { MongoClient } = require("mongodb");

let db = null;

async function initDb() {
  const url = "mongodb://localhost:27017/CopyPasta";
  const dbName = "CopyPasta";
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database created");

  await client.connect();
  db = client.db(dbName);
  const collectionPaste = await db.createCollection("paste");
  console.log("Collection paste created");
}

async function getCollection(collectionName) {
  if (!db) {
    await initDatabase();
  }
  return db.collection(collectionName);
}

exports.initDb = initDb;
exports.getCollection = getCollection;
