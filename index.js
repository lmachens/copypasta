const express = require("express");
const { getCollection, initDatabase } = require("./lib/database");
const { ObjectID } = require("mongodb");
const path = require("path");

const app = express();
const port = 8080;
const dbName = "copy-pasta";
const collectionName = "pastes";

// Parse application/json for all request
app.use(express.json());

app.get("/api/pastes/:id", async (request, response) => {
  try {
    const pasteId = await get(request.params.id);
    return response.json(pasteId);
  } catch (error) {
    console.error(error);
    return response.end("Error");
  }
});

app.post("/api/pastes", async (request, response) => {
  try {
    const id = await set(request.body);
    return response.json({ id: id });
  } catch (error) {
    console.error(error);
    response.end("Error");
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

async function set(value) {
  const pastesCollection = await getCollection(collectionName);
  const result = await pastesCollection.insertOne({ paste: value });
  return result.insertedId.toHexString();
}

async function get(key) {
  const pastesCollection = await getCollection(collectionName);
  const pasteId = new ObjectID.createFromHexString(key);
  const paste = await pastesCollection.findOne({ _id: pasteId });
  return paste.paste;
}

initDatabase(dbName).then(() => {
  console.log(`Database ${dbName} is ready`);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
