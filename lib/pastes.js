const { ObjectID } = require("mongodb");
const { getCollection } = require("./database");

const collectionName = "pastes";

async function setPaste(paste) {
  const pastesCollection = await getCollection(collectionName);
  const result = await pastesCollection.insertOne({
    ...paste,
    createdAt: new Date()
  });
  return result.insertedId;
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
async function getRandomId() {
  const pastesCollection = await getCollection(collectionName);
  const cursor = await pastesCollection.aggregate([{ $sample: { size: 1 } }]);
  const randomPaste = await cursor.toArray();
  const { _id } = randomPaste[0];
  console.log(_id);
  return _id.toString();
}

exports.setPaste = setPaste;
exports.getPaste = getPaste;
exports.getRandomId = getRandomId;
