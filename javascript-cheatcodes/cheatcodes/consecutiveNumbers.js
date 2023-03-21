export const consecutiveNumbers = (val) => {
    return Array.from({ length: val }, (_, i) => ++i);
};