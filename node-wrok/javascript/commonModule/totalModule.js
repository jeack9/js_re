// totalModule.js
function total(fst, ...arr){
  let result = arr.reduce((acc, curr) => acc + curr, fst);
  return result;
}
module.exports = total;