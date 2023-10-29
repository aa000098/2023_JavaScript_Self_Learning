/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let 
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리'; const는 값을 변경할 수 없다.
/**
 * 선언과 할당
 * 1) 선언 : 변수를 선언
 * 2) 할당
 */

var name = '코드팩토리';
console.log(name);

let girlFriend  // let과 var은 선언만 하고 나중에 할당할 수 있음
console.log(girlFriend);    // undefined 출력됨

// const girl; const는 초기화하고 선언해야 함

