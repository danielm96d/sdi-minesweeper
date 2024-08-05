require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("test");
  res.send(`application running using NODE_ENV: ${process.env.NODE_ENV}`);
});

app.get("/users", async (req, res) => {
  try {
    const userResp = await knex("users").select("name");
    res.json(userResp);
  } catch (error) {
    console.error("error getting users: ", error);
    return res.status(500).json({ error: "failed to get users" });
  }
});

app.post("/users", async (req, res) => {
  const { userName } = req.body;
  console.log("post user request started with username: ", userName);
  if (!userName) {
    return res.status(400).json({
      error: `req.body.userName = ${userName} please send a userName for your post request`,
    });
  }
  try {
    await knex("users").insert({ name: userName });
    res.status(202).send(`new user ${userName} added`);
  } catch (error) {
    console.error("error posting user: ", error);
    return res.status(500).json({ error: "failed to post user" });
  }
});

app.listen(PORT, () => {
  console.log(`application running using NODE_ENV: ${process.env.NODE_ENV}`);
});
