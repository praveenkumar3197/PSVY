let arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(i, 1);
        }
    }
}
console.log('hi', arr); //It's only work for order number like "1,2,3"

let arr2 = [3, 4, 3, 5, 6, 7, 5, 2, 1, 4, 6, 7];
let arr3 = [];
for (let i = 0; i < arr2.length; i++) {
    let index = false;
    for (let j = 0; j < arr3.length; j++) {
        if (arr2[i] === arr3[j]) {
            index = true;
            break;
        }
    }
    if (!index) {
        arr3.push(arr2[i]);
    }
}
console.log(arr3);

let filter_array = (
    (data) => {
        return data.filter((value, index) =>
            data.indexOf(value) === index)
    }
)
console.log(filter_array(arr2));