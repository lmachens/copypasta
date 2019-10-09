const express = require("express");
const { getCollection } = require("./database");
const { ObjectID } = require("mongodb");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/pastes/:id", async (request, response) => {
  try {
    response.writeHead(200, { "Content-Type": "application/json" });
    const pasteId = await get(request.params.id);
    return response.end(pasteId);
  } catch (error) {
    return response.end("Error");
  }
});
app.post("/api/pastes", async (request, response) => {
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

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

async function set(value) {
  const pastesCollection = await getCollection();
  const result = await pastesCollection.insertOne({ paste: value });
  return result.insertedId.toHexString();
}

async function get(key) {
  const pastesCollection = await getCollection();
  const pasteId = new ObjectID.createFromHexString(key);
  const paste = await pastesCollection.findOne({ _id: pasteId });
  return paste.paste;
}
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
