const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

const collectionName = "pastes";

async function setPaste(value) {
  const pastesCollection = await getCollection(collectionName);
  const result = await pastesCollection.insertOne({ paste: value });
  return result.insertedId;
}

async function getPaste(pasteId) {
  const pastesCollection = await getCollection(collectionName);
  const objectId = new ObjectID.createFromHexString(pasteId);
  const paste = await pastesCollection.findOne({ _id: objectId });
  if (!paste) {
    throw new Error("Can not find paste");
  }
  return paste.paste;
}

exports.setPaste = setPaste;
exports.getPaste = getPaste;
