const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Em Quyen!");
});
app.get("/tin-tuc", (req, res) => res.send("hello news"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
