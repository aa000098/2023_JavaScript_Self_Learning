/**
 * Using function to create objects
 */
function IdolModel(name, year) {
    if (!new.target) {
        return new IdolModel(name, year);
        // new 키워드를 안 썼을 때 쓴 것처럼 처리해서 잠재적 버그 극복
    }
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// undefined가 나옴. 생성자로 쓰려면 new를 꼭 써야함

// console.log(global.name);

// console.log(global.year);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);
// 이건 오류남, arrow 함수에서는 생성자 사용 불가, 일반 함수에서만 가능