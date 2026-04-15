export const getExtension = (file: File) => {
  const mime = file.type;
  return mime.split("/")[1];
};
