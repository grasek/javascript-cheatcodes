export const unique = (arr) => {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
