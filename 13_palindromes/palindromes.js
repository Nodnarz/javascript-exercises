const palindromes = function (string) {
    string = string.replace(/\s/g, '')
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    string = string.toLowerCase()
    if (string.split("").reverse().join("") === string) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
