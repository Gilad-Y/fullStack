exports.myBday = (bYear) => {
  return new Date().getFullYear() - bYear.split("/")[3];
};
