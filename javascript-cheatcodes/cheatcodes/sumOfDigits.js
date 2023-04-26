export const sumOfDigits = (val) => {
  let sum = 0;
  while(val !== 0){
     sum += val % 10;
     val = Math.floor(val / 10);
  }
  return sum;
}
