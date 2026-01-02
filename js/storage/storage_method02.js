const obj = {};

for (let i = 1; i <= 100; i++) {
    const temp = {
    id: `id${i}`,
    name: `홍길동${i}`,
    };
    obj['id' + i] = temp;
}
// console.log(obj);

const id30 = obj['id30'];
console.log(id30)