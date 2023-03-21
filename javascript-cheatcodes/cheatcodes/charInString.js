export const charInString = (str) => {
    // currently counted letter is "x", "g" stands for "global", it means this regEx is searching the whole input, without stopping after the first match
    return (str.match(/x/g) || []).length
};