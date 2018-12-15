var addLines = function(inputArray){
    var res = 0;
    inputArray.forEach(element => {
        var operator = element.substring(0, 1),
            operand = Number(element.substring(1));
        if (operator === '-') res -= operand;
        else if (operator === '+') res += operand;
        else throw operator + " is not valid operator.";
    }); 
    return res;
}

var findRepeat = function (inputArray){
    var res = 0,
        vals = new Set([res]),
        BreakException = {};
    try {
        while (true) {
            inputArray.forEach(element => {
                var operator = element.substring(0, 1),
                    operand = Number(element.substring(1));
                if (operator === '-') res -= operand;
                else if (operator === '+') res += operand;
                else throw operator + " is not valid operator.";
    
                if (vals.has(res)) throw BreakException;
                else (vals.add(res))
            }); 
        }
    }catch (e){
        return res;
    }
}

console.log(addLines(require("fs").readFileSync("./input/day1.txt").toString().split("\n")));
console.log(findRepeat(require("fs").readFileSync("./input/day1.txt").toString().split("\n")));