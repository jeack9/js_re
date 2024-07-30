const express = require("express");
const userRouter = require("./routes/user.js");
const loginRouter = require("./routes/login.js");
const customerRouter = require("./routes/customer_pool.js");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
var cookieParser = require("cookie-parser");
const multer = require("multer");
const upload = multer({ dest: "c:/temp" });

const app = express();
const port = 80;

app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(morgan("combined"));
app.use(morgan(":date[] :method :url"));
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 3600000,
    },
    //store: new fileStore(),
  })
);
app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);
  const originalName = req.file.originalname;
  const fileName = req.file.filename;
  res.send(`upload success ${originalName} ${fileName}`);
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/member", userRouter);
app.use("/", loginRouter);
app.use("/customer", customerRouter);

//에러페이지

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
