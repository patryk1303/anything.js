var isFriday = function() {
    var day = new Date();
    return day.getDay() === 5;
}

anything.prototype.isFriday = isFriday;