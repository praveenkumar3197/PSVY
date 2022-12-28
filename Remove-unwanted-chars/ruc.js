let s = (a) =>{
    let b = a.length;
    let sum = 0;
    for(let r=0; r<b; r++){
        let i = a[r].replace(/\D/g, "");
        let sr = Number(i);
        sum +=sr; 
    }
    return sum;
}
let sa = (b) => {
    let sum = 0;
    b.forEach((a) => {
        let r = a.replace(/\D/g, "");
        let i = Number(r);
        sum += i;
    });
    return sum;
}
let sab = (a) =>{
    let sum = 0;
    a.map((r) => {
        let i = r.replace(/\D/g, '');
        let sr = Number(i);
        sum += sr; 
    })
    return sum;
}
let i = (r)=>{
    let sum = 0;
    r.map((s) => {
        let a = s.split(/\D/g).join('');
        let b = Number(a);
        sum += b;
    })
    return sum;
}
let sri = (i) => {
    let sum = 0;
    i.forEach((r) => {
        let a = r.replaceAll(/\D/g, '');
        let b = Number(a);
        sum += b;
    })
    return sum;
}
let ari = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"];
let aba = ["asdasd"];
let bar = ["asdasd12"];
let isr = ["12"];
console.log(s(ari),sa(ari),sab(ari),i(ari),sri(ari)); // 1512
console.log(s(aba),sa(aba),sab(aba),i(aba),sri(aba)); // 0
console.log(s(bar),sa(bar),sab(bar),i(bar),sri(bar)); // 12
console.log(s(isr),sa(isr),sab(isr),i(isr),sri(isr)); // 12