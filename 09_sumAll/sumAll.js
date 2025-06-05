const sumAll = function(a, b) {
    let result = 0
    if ((a || b) < 0) return "ERROR"
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    if ((typeof(a) != "number") || typeof(b) != "number") return "ERROR"
    
    if (a > b) {
        let temp = 0
        temp = a
        a = b
        b = temp
    }

    for (let i = a; i <= b; i++) {
        result += i;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
