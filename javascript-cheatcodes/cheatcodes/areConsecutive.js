export const areConsecutive = (arr1, arr2) => {
   arr1.sort((a, b) => a - b);
   const start = arr2.findIndex(
      (_, i) => i + arr1.length <= arr2.length && arr1.every((y, j) => y === arr2[i + j])
   );
   return start !== -1;
};
