const express = require("express");
const cors = require("cors");
const { initDb } = require("./api/db");
const { set, get } = require("./api/commands");
const app = express();

const port = 4000;

let id = 1;
const key = "test";

app.use(cors());
app.use(express.json());

app.get("/", function(request, respond) {
  respond.send("Hello World!");
});

app.post("/pastes", function(request, respond, next) {
  const paste = request.body.value;
  console.log(paste);
  console.log(id);
  newId = id += 1;
  const newEntry = { data: paste, key: newId };
  console.log(newEntry);
  console.log("POST");
  let body = "";
  request.on("data", function(data) {
    body += data;
  });
  request.on("end", async function() {
    await set(id, body);
  });
});

app.get(`/pastes/${key}`, function(request, respond, next) {
  respond.send(key);
});

initDb().then(() => {
  app.listen(port, function() {
    console.log(`Pasta being prepared on port ${port}!`);
  });
});
