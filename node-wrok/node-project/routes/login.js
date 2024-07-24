const express = require("express");
const router = express.Router();

// get: login
router.get("/login", (req, res) => {
  const {email, pw} = req.query;
  console.log(email);
  req.session.email = email;
  // req.session.is_logined = true;
  req.session.save(err => {
    if(err) throw err;
    else res.redirect("/member");    
  });
});

// get: logout
router.get("/logout", (req, res) => {
  res.send("로그아웃");
});

module.exports = router;