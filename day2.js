var fx = function (inputArray) {
    var numOfTwo = 0,
        numOfThree = 0;
    inputArray.forEach(element => {
        var map = new Map();
        element.split("").forEach(char => {
            if (!map.has(char)) map.set(char, 1); 
            else map.set(char, map.get(char) + 1);
        });
        var hasTwo, hasThree = false;
        for (var char of map.keys()){
            if (map.get(char) === 2) hasTwo = true;
            else if (map.get(char) === 3) hasThree = true;
        }
        if (hasTwo) numOfTwo++;
        if (hasThree) numOfThree++;
    });
    return numOfTwo * numOfThree;
}

var fx2 = function (inputArray) { 
    var lengthOfId = inputArray[0].length;
    var boxId;
    var indexOfReplace = 0;
    while (boxId === undefined && indexOfReplace < lengthOfId-2){
        var existing = new Set();
        inputArray.forEach(element => {
            var left = element.substring(0, indexOfReplace + 1);
            var right = element.substring(indexOfReplace + 2)
            var combine = left + right;
            if (existing.has(combine)) boxId = combine;
            else existing.add(combine)
        });
        indexOfReplace++;
    }
    return boxId;
}

console.log(fx(require("fs").readFileSync("./input/day2.txt").toString().split("\n")));
console.log(fx2(require("fs").readFileSync("./input/day2.txt").toString().split("\n")));
