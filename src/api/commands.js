// get and set command
//get command: sends pasta based on key
//set command sets new pasta

const { getCollection } = require("./db");

async function set(key, pasta) {
  const pasteCollection = await getCollection("paste");
  await pasteCollection.updateOne(
    { key: key },
    { $set: { pasta: pasta } },
    { upsert: true }
  );

  console.log("Pasta set");
}

async function get(id) {
  const pasteCollection = await getCollection("paste");
  const secret = await pasteCollection.findOne(
    { key: id },
    { pasta: true, _id: false }
  );

  console.log(id);
  return secret;
}

exports.set = set;
exports.get = get;
