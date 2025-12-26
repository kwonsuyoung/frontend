const makePageContainer = () => {
  const $pageContainer = document.querySelector('#page-container');
  for (let i = 1; i <= 10; i++) {
    const $span = document.createElement('span');
    //$span.innerHTML = `${i}`;
    //$span.innerHTML = i;
    $span.innerText = i;
    $pageContainer.append($span);
    $span.addEventListener('click', () => {
      getData(i);
    });
  }
};
makePageContainer();

const getData = (page) => {
  //한번돌리고 땡이 안되게 함수 안에 집어넣음
  fetch(`https://picsum.photos/v2/list?limit=50&page=${page}`) // 함수들의 호출부분
    .then((res) => res.json()) // json() 문자열인 json을 객체로 만든것. 역직렬화
    .then((json) => procItems(json)) //json타입은 배열, 안에 {}는 객체
    .catch((err) => {
      alert('에러 발생!');
      console.log(err);
    });
};
getData(1);

//데이터 전달 방식 중 하나 쿼리스트링
//query-string
//파라미터
//?key=value&key=value
//서버는 약속된 key값 말고 value만 보고 싶다
//페이징기술
// https://picsum.photos/v2/list?page=2&limit=100 100개씩 쪼갠 것에 2번째 페이지를 주세요

const $container = document.querySelector('#container');

const procItems = (list) => {
  $container.innerText = null;
  list.forEach((item) => {
    //배열 안에 있는 객체의 주소값이 하나씩 들어옴
    const elem = makeItem(item);
    $container.append(elem);
  });
};
const makeItem = (data) => {
  console.log('data:', data);
  const div = document.createElement('div');
  // div.className = 'aaa bbb';
  div.innerHTML = `
                    <img src="https://picsum.photos/id/${data.id}/${parseInt(
    data.width * 0.1
  )}/${parseInt(data.height * 0.1)}" alt="${data.author}" >
                    <div>${data.author}</div>
                `;
  return div;
};
