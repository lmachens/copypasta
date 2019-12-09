const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

const collectionName = "pastes";

async function setPaste(paste) {
  const { expireTime } = paste;
  const time = parseInt(expireTime);
  const pastesCollection = await getCollection(collectionName);

  if (time !== 0) {
    const result = await pastesCollection.insertOne({
      ...paste,
      createdAt: new Date(),
      expireAt: new Date(Date.now() + time)
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
    throw new Error("Can not find paste");
  }
  return paste;
}

exports.setPaste = setPaste;
exports.getPaste = getPaste;
