const express = require("express");
const userRouter = require("./routes/users");
const productRouter = require("./routes/product")
const cors = require("cors");
const morgan = require("morgan");
// session
const session = require("express-session"); 
const fileStore = require("session-file-store")(session); 
 
const app = express();
const port = 3000;

app.use(cors());
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
      maxAge: 60000, 
    }, 
    store: new fileStore(), 
  })
);

app.use("/member", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`server running!! http://localhost:${port}`);
});