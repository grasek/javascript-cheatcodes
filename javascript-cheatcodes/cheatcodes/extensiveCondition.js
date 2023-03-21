// instead of writing conditions like: "if(a === x1 || ... a === xn)"
// you can write it much simpler using array

// for example:

const example = () => {
  const result = [];
  for (let i = 0; i < 30; i++) {
    ![1, 7, 16, 29].includes(i) ? result.push(i) : undefined;
  }
    return result;
};

// as you can see there is no pattern to make our if-else statement short (surely, there are patterns like y(n) = 2n^2 + n + 1 for n = 0,1,2,3. But let's assume we don't have time to looking for non-obvious patterns)
// so instead of writing boring "if(i !== 1 || i !== 7 ||...)" we simplified it to ![1, 7, 16, 29].includes(i)