// var a = new Date();
// var b = [1,2,3]
// console.log(Object.prototype.toString.call(a));
// console.log(Object.prototype.toString.call(b));
// let c = void 0;
// console.log(c);

// console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991，2^53-1
// console.log(Number.MIN_SAFE_INTEGER);   //-9007199254740991

// console.log(isNaN('s'));
// console.log(Number.isNaN('s'));

// console.log('abcdefg'.split('').reverse().join(''));

// var a = new Array(5);
// console.log(a);

// console.log(~(-5));
// console.log(~(6));
// console.log(~(5));
// console.log(~(0));

// console.log(parseInt(-5).toString(2));
// console.log(parseInt(4).toString(2));


/* console.log(parseInt('123a2'));
console.log(Number('123a2'));
var c = 2 + '3';
console.log(typeof c);

function arrayPlus(a) {
    var i;
    for (i = 0; i < a.length; i++) {
        a[i] += 1;
    }
}
var s = [1, 2, 3];
arrayPlus(s);
console.log(s); */
/* a = [1,2,3]
console.log(Number(a));
console.log(a.toString()); */


function format1(number) {
    return Intl.NumberFormat().format(number);
}
function format2(number) {
    return number.toLocaleString('en')
}

console.log(format1(1234567.12332));
console.log(format2(1234567.12332));