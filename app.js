const express = require("express");
const app = express();
const port = process.env.PORT || 3130;
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/jafar_pro", (req, res) => {
  res.send("wellcome to jafar collection");
}) 
app.get("/users", (req, res) => {
  res.send("no user has been defined");
}) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});