require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importing database connection
const db = require("./db");

// Importing the port
const port = process.env.PORT || 5001;

// Get All Notes
app.get("/notes", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM note");
    res.json(results.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get One Note
app.get("/notes/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM note WHERE note_id = $1", [
      req.params.id,
    ]);

    res.json(results.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Create A Note
app.post("/create", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO note (note_description) VALUES ($1) RETURNING *",
      [req.body.note_description]
    );
    res.json(results.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update A Note
app.put("/notes/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE note SET note_description =$1 WHERE note_id = $2 RETURNING *",
      [req.body.note_description, req.params.id]
    );

    res.json(results.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Delete A Note
app.delete("/notes/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM note WHERE note_id = $1", [
      req.params.id,
    ]);

    res.json("Note was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
