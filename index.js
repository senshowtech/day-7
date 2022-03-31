const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index.js");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", routes);
app.use("/public", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
