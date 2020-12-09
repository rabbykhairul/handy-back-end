const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const IMAGE_UPLOAD_PATH = "../../files/resize-image/uploaded-images/";

const uploadImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, IMAGE_UPLOAD_PATH));
  },

  filename: (req, file, cb) => {
    const newFileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${newFileName}${fileExtension}`);
  },
});

const upload = multer({ storage: uploadImageStorage });

router.post("/", upload.single("image"), (req, res) => {
  res.send({ uploadedImage: req.file.originalname });
});

module.exports = router;
