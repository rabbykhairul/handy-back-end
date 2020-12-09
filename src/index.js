const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(`${req.hostname} says hello!`);
});

app.use("/api/resize-image", require("./api/resize-image"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
