// server.js
import http from "http";
const server = http.createServer((req, res) => {
  res.end("hello");
});
server.listen(3000, "localhost", () => {
  console.log("http://localhost:3000");
});