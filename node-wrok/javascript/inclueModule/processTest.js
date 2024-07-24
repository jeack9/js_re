// processTest.js
// 명령행 인수
import * as pro from "node:process";

pro.argv.forEach((val, idx) => {
  console.log(`${idx}: ${val}`);
});
console.log(pro.env);
for (let item in pro.env) {
  console.log(pro.env[item]);
}