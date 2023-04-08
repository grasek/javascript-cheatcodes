const elementCount = (arr) => arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
