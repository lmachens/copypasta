const express = require("express");
const { getCollection } = require("./database");
const { ObjectID } = require("mongodb");
const cors = require("cors");
const api = express();
api.use(cors());

const port = 8080;

api.get("/pastes/:id", async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "text/json" });
    const pasteId = await get(request.params.id);
    return response.end(pasteId);
  } catch (error) {
    return response.end("Error");
  }
});
api.post("/pastes", async (request, response) => {
  try {
    let body = "";
    request.on("data", function(data) {
      body += data;
    });
    request.on("end", async function() {
      response.writeHead(200, { "Content-Type": "application/json" });
      const id = await set(body);
      return response.end(JSON.stringify({ id: id }));
    });
  } catch (error) {
    response.end("Error");
  }
});

async function set(value) {
  const pastesCollection = await getCollection();
  const result = await pastesCollection.insertOne({ paste: value });
  return result.insertedId.toHexString();
}

async function get(key) {
  const pastesCollection = await getCollection();
  // {_id: blabla, paste:caca}
  const pasteId = new ObjectID.createFromHexString(key);
  const paste = await pastesCollection.findOne({ _id: pasteId });
  return paste.paste;
}
api.listen(port, () => {});
