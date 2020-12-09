const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send({ message: "Response received on `resizeImage` api endpoint." });
});

module.exports = router;
