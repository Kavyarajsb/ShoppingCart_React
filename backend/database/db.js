const pgp = require("pg-promise")();

// Database connection
const connectionUrl = "postgressql://postgres:kavya@localhost:5432/todos";
const db = pgp(connectionUrl);

db.any("SELECT * FROM todo")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });