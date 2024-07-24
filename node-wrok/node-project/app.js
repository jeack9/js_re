const express = require("express");
const userRouter = require("./routes/users");
const productRouter = require("./routes/product");
const loginRotuer = require("./routes/login");
const cors = require("cors");
const morgan = require("morgan");
// 업로드
const multer  = require('multer');
const upload = multer({ dest: 'C:/Temp' });
// session
const session = require("express-session"); 
const fileStore = require("session-file-store")(session); 
// cookie
const cookieParser = require('cookie-parser');
 
const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(morgan(':method :url'));
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
    store: new fileStore(), 
  })
);

app.post("/upload", upload.single('profile'), (req, res) => {
  console.log(req.file);
  const originalName = req.file.originalname;
  const filename = req.file.filename;
  res.send(`uploaded!! ${originalName}, ${filename}`);
});

app.use("/member", userRouter);
app.use("/product", productRouter);
app.use("/", loginRotuer);

app.listen(port, () => {
  console.log(`server running!! http://localhost:${port}`);
});