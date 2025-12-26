/*
자바스크립트는 싱글 스레드, 비동기 처리를 합니다.
스레드가 하나다. 스레드랑 프로그램 안에서 실행 단위(일하는 사람 1명)

만약 스레드 하나에 동기처리라면 턴게임은 괜찮다 (체스, 오목, 바둑)
FPS게임은 스레드가 여러개 만들어지며 동기처리를 한다.

근데 멀티 스레드 & 동기처리를 자바스크립트는 싱글 스레드&비동기로 해결한다.

자바스크립트의 특징 특징은 코드가 여러개 인데 먼저 시작한 코드가 나중에 끝날 수도 있다.
항상 그런 것은 아니고 늦게 끝날 것이라고 판단되는 코드는 비동기로 처리한다. 
*/

/* setTimeout
첫번째 파라미터: 함수의 주소값
두번째 파라미터: 숫자 (millisecond값), 1000ms > 1초
ms시간 이후에 함수를 호출한다
*/
setTimeout(() => {
    console.log('첫번째 setTimeout');
}, 1000);

setTimeout(() => {
    console.log('두번째 setTimeout');
}, 900);


setTimeout(() => {
    console.log('세번째 setTimeout');
}, 800);

// 콜백 지옥;;;;;;;;;;;
setTimeout(() => {
    console.log('-첫번째 setTimeout');
    setTimeout(() => {
        console.log('-두번째 setTimeout');
        setTimeout(() => {
            console.log('-세번째 setTimeout');
        }, 800);
    }, 900);
}, 1000);

/*
콜백 지옥에 빠지지 않기 위해 promie를 배운다.
promise는 코드를 플랫(Flat)하게 작성할 수 있도록 도와준다.
*/



