const palindromes = function (string) {
    let cleanString = string.replace(/[^\w]|_/g, "").toLowerCase();
    let reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
