// objectLiteral.js
// 객체 상수
let obj = {addr: {zip: "5000", si: "대구"}, hobby: "gg"};

// 객체구조분해
let { addr, hobby } = obj;
//let addr = obj.addr;
// let hobby = obj.hobby;
console.log(addr.zip);

// 배열구조분해 ( ... rest 연산자 )
let score = [90, 80, 100, 50, 70];
let [fst, snd, ...rest] = score;
console.log(fst);
console.log(snd);
console.log(rest);

// 배열깊은복사 spread 연산자
let deepCopyScore = [...score];
deepCopyScore[0] = 1;
console.log(deepCopyScore, score);

// 객체깊은복사 spread 연산자
let emp = {name: "choi", dept: "개발", sal: 5000};
let deepCopyEmp = {...emp, name: "kim"};
console.log(emp, deepCopyEmp);