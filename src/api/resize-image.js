const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { resizeImage } = require("../services/imageService");
const validateImageFile = require("../utils/validateImageFile");

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

const upload = multer({
  storage: uploadImageStorage,

  fileFilter: function (req, file, cb) {
    const result = validateImageFile(file);
    if (result) return cb(null, true);
    else return cb(null, false);
  },
});

router.post("/", upload.single("image"), async (req, res) => {
  const resizedImageFileName = await resizeImage(req.file.path, req.body);
  const filePath = `../../files/resize-image/processed-images/${resizedImageFileName}`;
  res.download(path.join(__dirname, filePath));
});

module.exports = router;
