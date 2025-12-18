const star = parseInt(Math.random() * 5.0) + 3;

// console.log('star:', star);

// for (let i = 0; i < star; i++) {
//     stl = '';
//     for (let s = 0; s < star; s++) {
//         stl += '*';    
//     }
//     console.log(stl);
// }

// console.log('star:', star);

// let str = '';
// for (let i = 0; i < star; i++){
//     str += "*";
// }
// for (let i = 0; i < star; i++){
//     console.log(str);
// }


console.log('star:', star);

let str2 = '';
for (let i = 1; i <= star * star; i++){
    str2 += "*";
    if (i % star === 0) {
        str2 += '\n';
    }
}
console.log(str2);