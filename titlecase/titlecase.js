function titlecase(str){
    let word = str.toLowerCase().split(" ");
    for(let i=0; i<word.length; i++){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    return word.join(" ");
}
console.log(titlecase("I'm a little tea pot"));
function titlecase2(str){
    let title2 = str.toLowerCase().split(" ").map(function(elem){
    return elem[0].toUpperCase() + elem.slice(1);
    })
    return title2.join(" ");
}
 console.log(titlecase2("I'm a little tea pot"));
// let name = ['arun', 'tamil'];
// name[0] = "Arun"; this index upper case
// console.log(name);

// let str1 = "tamilselvan";
// console.log(str1.slice(1)); this for remove first letter(slice)