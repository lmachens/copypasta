const express = require("express");
const cors = require("cors");
const { initDb } = require("./api/db");
const { set, get } = require("./api/commands");
const app = express();

const port = 4000;

let id = 1;

app.use(cors());
app.use(express.json());

app.get("/", function(request, respond) {
  respond.send("Hello World!");
});

app.post("/pastes", async function(request, respond, next) {
  console.log("POST");
  let body = "";
  request.on("data", function(data) {
    body += data;
  });
  request.on("end", async function() {
    await set("1234", path, body);
    response.end(`Set ${path}`);
  });
});

app.get("/pastes/:id", async function(request, respond, next) {
  console.log("Request ID:" + request.params.id);
  const id = await Number(request.params.id);
  const keyNew = await get(id);
  console.log(keyNew);

  respond.write(JSON.stringify(keyNew.pasta));

  respond.end();
});

initDb().then(() => {
  app.listen(port, function() {
    console.log(`Pasta being prepared on port ${port}!`);
  });
});
