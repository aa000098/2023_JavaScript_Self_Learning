/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new DataTransfer().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 */
console.log("-----------------")
console.log(Object.isExtensible(yuJin));
yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
// 객체에 값을 추가할 수 없게 만듦, 삭제는 가능

yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 */

console.log('------------------')

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new DataTransfer().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',

});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log(yuJin2);

yuJin2['year'] = 1999;
console.log(yuJin2);
// Object.seal을 하면 configurable을 false로 만들고,
// 값을 더 추가하고 삭제하지 못하게 하는 것, 이미 있는 값 변경은 됨

/**
 * Freezed
 * 읽기 외 모든 기능을 불가능
 */


const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new DataTransfer().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupaName'] = '아이브';

delete yuJin3['name'];

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// });

console.log(yuJin3);

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 203,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));