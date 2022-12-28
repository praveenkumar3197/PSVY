function largestOfFour(arr) {
    let maxes = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            let currentElement = arr[i][j];
            if (currentElement >= temp) {
                temp = currentElement;
            }
        }
        maxes.push(temp);
    }
    return maxes;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largestOfFour2(arr) {
    let maxes = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let currentElement = arr[i][j];
            if (currentElement >= maxes[i]) {
                maxes[i] = currentElement;
            }
        }
    }
    return maxes;
}
console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(largest([1,2,3,4]));
function largestOfFour3(arr) {
    let maxes = [];
    for (let i = 0; i < arr.length; i++) {
        let inner = largest(arr[i]);
        maxes.push(inner);
    }
    return maxes;
}
console.log(largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));