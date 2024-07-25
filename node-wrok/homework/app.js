const express = require("express");
const boardRouter = require("./routes/board")
const app = express();

// 미들웨어 등록
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 기본 페이지
app.get("/", (req, res)=>{
  res.send("welcome!");
});

// 라우터 등록
app.use("/board", boardRouter);

app.listen(80, () =>{
  console.log("run server!! http://localhost");
});