export const alphabeticalValues = () => {
    let dictionary = {};
    let val = 1;
    for (let i = 97; i <= 122; i++) {
        let key = String.fromCharCode(i);
        dictionary[key] = val;
        val++;
    }
    return dictionary;
};