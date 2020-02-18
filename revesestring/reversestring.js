function reversestring(str){
    let i = str.length-1;
    let revstr = "";
    while(i>=0){
        revstr = revstr + str[i];
        i--;
    }
    return revstr;
}
 let result = reversestring("praveen");
 console.log(result);  

 function reverse(str2){
     let revstr2 = "";
     for(let i=str2.length-1; i>=0; i--)
     {
        revstr2 = revstr2 + str2[i];
     }
     return revstr2;
 }
 let result2 = revrese("praveen");
 console.log(result2);