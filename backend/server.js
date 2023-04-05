const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

const db = require('./database/db')

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  