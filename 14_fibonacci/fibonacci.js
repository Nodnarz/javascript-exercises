const fibonacci = function(number) {
    if (number == 0 || number == 1) return Number(number)
    if (number < 0) return "OOPS"
    return fibonacci(number - 1) + fibonacci(number - 2)
};

// Do not edit below this line
module.exports = fibonacci;

/*
 0, 1, 1, 2, 3, 5, 8, 13,...
*/