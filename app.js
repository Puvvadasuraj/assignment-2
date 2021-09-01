const express = require("express");
const path = require("path");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
app.use(express.json());
const dbPath = path.join(__dirname, "twitterClone.db");
let database = null;

const initializeServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("The app is running at http://localhost:3000");
    });
  } catch (error) {
    console.log(`The app is stopped running due to ${error.message}`);
    process.exit(1);
  }
};

initializeServer();

app.post("/register/", async (request, response) => {
  const { username, password, name, gender } = request.body;
  const query = `
    SELECT
        *
    FROM
        user
    WHERE
        username='${username}';`;
  const queryResponse = await database.get(query);
});
