function confirmEnding(str, target) {
    if (str.endsWith(target)) {
        return true;
    }
    return false;
}
console.log(confirmEnding("Bastian", "n"));
function confirmEnding2(str, target) {
    return str.endsWith(target);
}
console.log(confirmEnding2("Bastian", "n"));
function confirmEnding3(str, target) {
    if (str.substr(-target.length) === target) {
        return true;
    }
    return false;

}
console.log(confirmEnding3("Bastian", "n"));
function confirmEnding4(str, target) {
    return str.substr(-target.length) === target;
}
console.log(confirmEnding4("Bastian", "n"));

// substr
// let sentence = "i am arun";
// console.log(sentence.substr(2));
// console.log(sentence.substr(-2));