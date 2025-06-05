const leapYears = function(year) {
    //non-century and divisable by 4
    if (year % 4 == 0 && year % 100 != 0) return true

    //centuries covered
    else if (year % 100 == 0 && year % 400 == 0) return true
    
    else return false
};

// Do not edit below this line
module.exports = leapYears;
