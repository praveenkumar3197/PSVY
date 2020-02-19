function palindrome(str){
    let rstr = "";
    let reg = /[\W_]/g;
    let str2 = str.toLowerCase().replace(reg,"");
 for(let i = str2.length-1; i>=0; i--)
 {
    rstr = rstr + str2[i];
 }
 return str2 == rstr;
}
console.log(palindrome('eye'));