function longestword(str) {
    let word = str.split(" ");
    let longest = "";
    for (let lword of word) {
        if (lword.length > longest.length) {
            longest = lword;
        }
    }// console.log(word);
    return longest.length;
}
console.log(longestword("The quick brown fox jumped over the lazy dog"));
function longestword2(str) {
    return str.split(" ").sort(function (a, b) { return b.length - a.length })[0];
}
console.log(longestword2("The quick brown fox jumped over the lazy dog"));

let fruit = ['apple', 'mango', 'orange']

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]); //select by index
}
for (let fruits of fruit) {
    console.log(fruit); //select by elements
} 