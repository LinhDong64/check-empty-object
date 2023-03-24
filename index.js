const isEmptyObject = (object) => {
  if (Object.keys(object).length === 0) return true;
  return false;
};
module.exports = isEmptyObject;
