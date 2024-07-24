// hw_array.js
let arr = [
  {stdId: 1, kor: 90, eng: 80},
  {stdId: 2, kor: 50, eng: 50},
  {stdId: 3, kor: 90, eng: 90},
];

// 1. kor + eng 합계순으로 정렬
arr.sort((a, b) => (b.kor + b.eng) - (a.kor + a.eng));
console.log(arr);

// 2. 평균이 60미만인 학번만 출력 [2]
let avg60dec = arr.filter(std => (std.kor + std.eng) / 2 < 60).map(std => std.stdId);
console.log(avg60dec);

// map {stdId: 1, kor: 90, eng: 80, sum: 합계},