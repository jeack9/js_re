/*
  array.map, filter, sort, reduce
*/

let arr = [
  {username: 'choi', dept: '개발', sal: 2000},
  {username: 'park', dept: '인사', sal: 1000},
  {username: 'kim', dept: '개발', sal: 1500},
];
// username이 park 인 사원 (find)
let findResult = arr.find(emp => emp.username == "park");
console.log("park find: ", findResult);

// 1. sal 1500 이상인 사원 조회 fillter(얕은 복사)
let filArr = arr.filter((ele, idx, arry) => ele.sal >= 1500);
console.log("sal > 1500", filArr);

// 2. 급여 오름차순 sort
arr.sort((a, b) => a.sal - b.sal)
console.log("sort arr: ", arr);

// 2.1 이름 오름차순 sort
// arr.sort((a, b) => a.username == b.username ? 0 : a.username > b.username ? 1 : -1);
arr.sort((a, b) => {
  if(a.username > b.username) return 1;
  else if(a.username == b.username) return 0;
  else return -1;
});
console.log("nameSort : ", arr);

// 3. 급여합계 reduce
let reduceSum = arr.reduce((acc, curr) => acc += curr.sal, 0);
console.log("sumSal: ", reduceSum);

// 4. 모든 사원의 급여를 500 인상 (map)
// let inc500 = arr.map(obj => {
//   return {...emp, sal: emp.sal + 500}
// });
let inc500 = arr.map(obj => {
  let rObj = {...obj};
  rObj.sal += 500;
  return rObj;
});
console.log("inc500: ", inc500);

// 5. 급여가 1500 이상인 사람이름 (map, fillter)
let filterMapResult = arr.filter(emp => emp.sal >= 1500).map(emp => emp.username);
console.log("filterMapResult: ", filterMapResult);
console.log(arr, "ddd");