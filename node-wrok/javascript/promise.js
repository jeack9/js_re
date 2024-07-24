// promise.js


function delay(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

delay()
.then(result => console.log(result));