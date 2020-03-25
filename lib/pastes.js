const { ObjectID } = require('mongodb');
const { getCollection } = require('./database');

const collectionName = 'pastes';

async function setPaste(paste) {
  const { expireTime } = paste;
  const pastesCollection = await getCollection(collectionName);

  if (expireTime !== -1) {
    const result = await pastesCollection.insertOne({
      ...paste,
      createdAt: new Date(),
      expireAt: new Date(Date.now() + expireTime)
    });
    return result.insertedId;
  } else {
    const result = await pastesCollection.insertOne({
      ...paste,
      createdAt: new Date()
    });
    return result.insertedId;
  }
}

async function getPaste(pasteId) {
  const pastesCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(pasteId);
  const paste = await pastesCollection.findOne({ _id: objectId });
  if (!paste) {
    throw new Error('Can not find paste');
  }
  return paste;
}

async function getRandomPaste() {
  const pastesCollection = await getCollection(collectionName);
  const cursor = await pastesCollection.aggregate([{ $sample: { size: 1 } }]);
  const pastes = await cursor.toArray();
  const paste = pastes[0];
  if (!paste) {
    throw new Error('Can not find paste');
  }

  return paste;
}

async function createIndexes() {
  const collection = await getCollection(collectionName);

  await collection.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
}

exports.setPaste = setPaste;
exports.getPaste = getPaste;
exports.getRandomPaste = getRandomPaste;
exports.createIndexes = createIndexes;
