// get and set command
//get command: sends pasta based on key
//set command sets new pasta

async function set(key, pasta) {
  const pasteCollection = await getCollection("paste");
  await pasteCollection.updateOne(
    {
      key: key
    },
    {
      pasta
    }
  );

  console.log("Pasta set");
}

async function get(key) {
  const pasteCollection = await getCollection("paste");
  const secret = await pasteCollection.findOne({ key });
  return secret;
}

exports.set = set;
exports.get = get;
