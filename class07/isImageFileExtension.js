const isImageFileExtension = (fileName) => {
  if (!fileName) return undefined;
  const ImageFileName = [".png", ".jpg", ".jpeg", ".gif", ".svg"];
  return ImageFileName.some((item) => fileName.includes(item));
};

console.log(isImageFileExtension("sample.jpg"));
console.log(isImageFileExtension("sample.png"));
console.log(isImageFileExtension("sample.gif"));
console.log(isImageFileExtension("sample.svg"));
console.log(isImageFileExtension("sample.txt"));
console.log(isImageFileExtension("sample"));
console.log(isImageFileExtension());