// JavaScript File

// const n = parseInt(prompt('enter a number'));
// let result = fnum(n);
// function fnum (n) {
//     let a = 1,
//         b = 1;
//     for (let i = 3; i < n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// alert (result);
const n = parseInt(prompt('enter a number'));
let result = fibNum(n);

function fibNum(n) {
     if (n < 2) {
        return 1;
    }
    return fibNum(n - 1) + fibNum(n - 2);
   
}
alert(result);
