/*
    클래스는 설계도(문서)같은 것. 실체가 아니다. 
    설계도를 가지고 실체를 만듬 : 클래스를 가지고 객체를 만듬
    클래스 vs 객체
    붕어빵틀 vs 붕어빵
*/
//#: 은닉화, 캡슐화
class StorageService {
  //전역 변수는 객체가 살아있는 동안 데이터가 유지된다.
  #storageName; //전역변수(속성), #이 붙으면 private(비공개) 외부에서 접근할 수 없는 속성

  //생성자, 객체를 생성하려면 꼭 생성자를 호출해야 합니다.
  //메소드지만 특별하다. 객체 생성(객체화)할 때만 호출할 수 있다.
  constructor(storageName) {
    //파라미터, 객체 생성 때 외부에서 값이 들어온다.
    if (!storageName) {
      throw new Error('스토리지 이름을 입력해주세요.');
    }
    this.#storageName = storageName;
  }

  // 스토리지 데이터 조회 p.161
  #getStorageData() {
    const json = localStorage.getItem(this.#storageName); //this는 나 자신의 주소값
    //브라우저에서 제공하는 객체 요구
    if (json) {
      return JSON.parse(json);
    } //json문자열이 있다면(true) 객체로 역직렬화 후 리턴
    return {
      //false
      data: {},
      lastId: 1,
    }; //초기화 객체 리턴
  }

  // 스토리지 데이터 저장 p.161
  #saveStorageData(data) {
    const json = JSON.stringify(data); //객체(data)를 json문자열(value)로 직렬화
    localStorage.setItem(this.#storageName, json); //value를 localStorage에 저장
  } 

  // 신규 항목 추가 p.162
  addItem(item) {
    console.log(item);
    // item = { title: '1', content: '1 내용' }
    /* 1이 추가된 시점
      data {
          '1': { id: 1, title: '1', content: '1 내용' }
      },
      lastId: 2
     */
    const storageData = this.#getStorageData(); //기존에 저장된 데이터 가져와(최초 빈 객체가 넘어온다.) {}
    item.id = storageData.lastId; // item = { id: 1(얘가 추가된거), title: '1', content: '1 내용' }
    storageData.data[storageData.lastId++] = item; //{}  >>  { '1': { id: 1, title: '1', content: '1 내용' } }
    this.#saveStorageData(storageData);
  }

  // 전체 항목 조회
  getItems() {
    // const savedData = this.#getStorageData();
    // return savedData.data; 이 두줄을 합친게 아래줄
    return this.#getStorageData().data;
    // 순서대로 실행. (체이닝 기법) this를 가져오고, 그거에대해 #getStorageData()를 돌려 나온 값의 .data를 가져오기
  }

  // 부분 항목 조회
  getItem(id) {
    //return this.#getStorageData()[id];
    const storageData = this.#getStorageData();
    return storageData.data[id]; //item객체가 리턴된다.
  }

  delItem(id) {
    //특정한 메모글을 삭제하기 위해 id값을 파라미터로 받는다.
    const storageData = this.#getStorageData();
    delete storageData.data[id];
    this.#saveStorageData(storageData);
  }

  //내용 수정하기
  setItem(item) {
    const storageData = this.#getStorageData();
    storageData.data[item.id] = item; //똑같은 속성에 저장하면 됨
    this.#saveStorageData(storageData);
  }
}

//StorageService 클래스 내에 있는 생성자 호출!!
//생성자 호출시에는 new 키워드가 앞에 있어야 한다.
//객체가 하나만 만들어질 수 있도록 변경
const storageService = new StorageService('myMemo');
export default storageService;
