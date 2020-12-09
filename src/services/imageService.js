const sharp = require("sharp");
const path = require("path");

const PROCESSED_IMAGE_SAVE_PATH = path.join(
  __dirname,
  "../../files/resize-image/processed-images/"
);

const resizeImage = async (imagePath, preferences) => {
  const { width = 300, height = 300, format = "jpeg" } = preferences;
  const newImageName = `${Date.now()}-${Math.round(
    Math.random() * 1e9
  )}.${format}`;

  await sharp(imagePath)
    .resize(Number(width), Number(height), { fit: "fill", position: "center" })
    .toFormat(format)
    .toFile(path.join(PROCESSED_IMAGE_SAVE_PATH, newImageName));

  return newImageName;
};

module.exports = { resizeImage };
