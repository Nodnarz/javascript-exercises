const removeFromArray = function(array, ...extra) {
    let newArray = []

    array.forEach((element) => {
        if (!extra.includes(element)) {
            newArray.push(element)
        }
    });

    return newArray
    
};

// Do not edit below this line
module.exports = removeFromArray;
