const mimetypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/x-icon",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/webp",
];

const validateImageFile = (file) => {
  const fileMime = file.mimetype;
  return mimetypes.includes(fileMime);
};

module.exports = validateImageFile;
