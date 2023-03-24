export const isEmptyObject = (object: { [key: string]: string }) => {
  if (Object.keys(object).length === 0) return true;
  return false;
};
