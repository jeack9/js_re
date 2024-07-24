// exam2_promise.js

// promise 실습
let num1 = 10;
let num2 = 1;
let total = 30;

function numSum(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      num1 + num2 == total ? resolve(true) : reject(false);
    }, 2000);
  });
}

// numSum()
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

async function sumAwait(){
  let result = await numSum().catch(err => err);
  console.log(result);
}
sumAwait();