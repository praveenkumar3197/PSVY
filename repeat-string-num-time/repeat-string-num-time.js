function repeatStringNumTimes(str, num){
    if (num<0){
        return "";
    }
    return str.repeat(num);
}
console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes2(str, num){
    let fullstr = "";
    for(i=0; i<num; i++){
        fullstr = fullstr + str;
    }
    return fullstr;
}
console.log(repeatStringNumTimes2("abc", 3));
function repeatStringNumTimes3(str, num){
    if (num<0){
        return "";
    }
    if(num === 1){
        return str;
    }
    return str + repeatStringNumTimes3(str, num-1);
}
console.log(repeatStringNumTimes3("abc", 3));