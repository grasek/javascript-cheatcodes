export const group = (arr) => {
  return Object.values(arr.reduce((acc, curr) => ((acc[curr] = [...acc[curr] || [], curr]), acc), {}));
}
