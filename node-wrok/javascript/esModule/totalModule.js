// totalModule.js
export default function total(fst, ...arr){
  let result = arr.reduce((acc, curr) => acc + curr, fst);
  return result;
}

export function findNum(num, arr=[]){
  return arr.find(ele => ele == num);
}

export function filterNum(num, arr=[]){
  return arr.filter(ele => ele > num);
}