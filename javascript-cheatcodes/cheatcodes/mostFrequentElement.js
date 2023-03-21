export const mostFrequentElement = (arr) => {
    return Object.entries(
        arr.reduce((a, b) => {
            a[b] = (a[b] || 0) + 1;
            return a;
        }, {})
    ).reduce((a, b) => a[1] > b[1] ? a : b);
};