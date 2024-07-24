// url.js
const url = new URL("https://www.naver.com/foo/qwe?username=ccc");
console.log(url.search);
console.log(url.searchParams.get("username"));
console.log(url.protocol);
console.log(url.pathname);
console.log(url.hash);
console.log(url.host);