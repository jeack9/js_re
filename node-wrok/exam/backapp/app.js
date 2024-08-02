const express = require("express");
const cookieParser = require("cookie-parser");
// const cors = require("cors");
const morgan = require("morgan");
const customerRouter = require("./route/customer");
const bookRouter = require("./route/book");
const boardRouter = require("./route/board");
const bCommentRouter = require("./route/board_comment");
const app = express();
const port = 80;

// 미들웨어
// app.use(cors()); // cors 전체 허용
app.use(cookieParser()); // 쿠키
app.use(express.urlencoded({ extended: false })); // 파라미터
app.use(express.json()); // json parse

app.use(morgan(":method :url")); // 서버 요청 로그

// 서버 첫페이지
app.get("/", (req, res) => {
  res.send("hello");
});

// 라우팅
app.use("/customer", customerRouter);
app.use("/api/book", bookRouter);
app.use("/api/board", boardRouter);
app.use("/api/bComment", bCommentRouter);

app.listen(port, () => {
  console.log(`running server! http://localhost:${port}`);
});
