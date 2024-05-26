const fibonacci = function(n) {
    let intNumber = Number(n);
    if (intNumber < 0) {
        return "OOPS"
    } else if (intNumber === 0) {
        return 0;
    } else if (intNumber === 1) {
        return 1;
    } else {
        return fibonacci(intNumber - 1) + fibonacci(intNumber - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
