// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const path = require("path");
const { initDatabase } = require("./lib/database");
const { getPaste, setPaste, createIndexes } = require("./lib/pastes");

const app = express();

// Parse application/json for all request
app.use(express.json());

app.get("/api/pastes/:id", async (request, response) => {
  try {
    const pasteId = request.params.id;
    const paste = await getPaste(pasteId);
    return response.json(paste);
  } catch (error) {
    console.error(error);
    return response.status(404).end("Error");
  }
});

app.post("/api/pastes", async (request, response) => {
  try {
    const paste = request.body;
    const id = await setPaste(paste);
    return response.json(id);
  } catch (error) {
    console.error(error);
    response.status(400).end("Error");
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

initDatabase(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  await createIndexes();
  console.log("Indexes created");

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
