export const areConsecutive = (arr1, arr2) => {
    const start = arr2.indexOf(arr1[0]);
    if (start === -1 || start + arr1.length > arr2.length) return false;
    for (const [i, value] of arr1.entries()) {
        if (value !== arr2[start + i]) return false;
    }
    return true;
};