const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`${req.hostname} says hello!`);
});

app.use("/api/resize-image", require("./api/resize-image"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
