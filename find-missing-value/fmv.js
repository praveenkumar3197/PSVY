let s = (a) => {
    let b = a.length;
    let r = 0;
    let ri = 0;
    for (let i = 1; i < b; i++) {
        if (a[r] < a[i]) {
            r = i;
        }
        if (a[ri] > a[i]) {
            ri = i
        }
    }
    let sri = a[ri]
    let sa = a[r];
    let ab = []
    for (let ba = sri; ba <= sa; ba++) {
        if (a.indexOf(ba) < 0) {
            ab.push(ba);
        }
    }
    return ab;
}
// console.log(s([3,5,1,2,6,8,9,15]))
document.getElementById('demo').innerHTML = s([3, 5, 1, 2, 6, 8, 9, 15]);