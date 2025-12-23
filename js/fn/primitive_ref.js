/*

primitive 타입 (일반 타입) vs reference 타입 (참조 타입)

참조 타입: 주소값
일반 타입: 주소값 외 모든 것
*/

const changeNum = (n) => {
    n = 20;
}

let num = 10;
console.log('before changeNum num:', num);
// changeNum함수 호출하면서 num이 가지고 있는 값 전달
changeNum(num);
console.log('after changeNum num:', num);

// num에는 10이라는 일반값을 가지고 있음
// 함수 chageNum을 호출할 때 num과 n은 다른 공간임. num의 값을 복사해 n의 위치에 가져다 놓음
// 동등하긴 하나 동일하진 않음


console.log('------------------------');


const changeBoxNum = (boxNum) => {
    boxNum = {
        num: 30
    }
    boxNum.num = 20;
    //boxNum 함수를 호출할때 잠깐 반짝 살았다가 function이 끝나면 죽는 공간
    return boxNum;
}

let box = {
    num: 10
};
console.log('before changeBoxNum box.num:', box.num);
changeBoxNum(box);
console.log('after changeBoxNum box.num:', box.num);
const box2 = changeBoxNum(box);
console.log('box2.num:', box2.num);
