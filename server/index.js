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
app.get("/api/notes", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM note");
    res.json(results.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
