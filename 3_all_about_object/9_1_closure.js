/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    // return innerGetNumber();
    return innerGetNumber;
}

// console.log(getNumber());

const runner = getNumber();
console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱 - 매우 오래 걸리는 계산 한 번만 실행
 */
function cachFunction() {
    // 아래 계산은 매우 오래걸린다는 가정을 했을 때
    var number = 10 * 10;

    function innerCachFunction(newNumber) {
        return number * newNumber;
    }

    return innerCachFunction;
}

const runner2 = cachFunction();

console.log(runner2(10));
console.log(runner2(20));



function cachFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }
    return increment;
}

/**
 * 2) 데이터 캐싱 - 반복적으로 특정 값을 변경
 */
const runner3 = cachFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
    this.name = name;
    var _year = year;
    this.sayNameAndYear = function () {
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin._year);
console.log(yuJin.name);

