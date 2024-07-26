// 240725
const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");
const { total } = require("../mysql/customer_sql");
const pageDTO = require("../mysql/pageDTO");

// 페이지전체조회
// router.get("/", async (req, res) => {
//   let page = req.query.page;
//   let total = await mysql.query("customer", "total");
//   let paging = {...new pageDTO(page, total[0].total)};
//   mysql.query("customer", "customerListPaging", [(page - 1) * 5, page * 5])
//     .then(result => {
//       console.log("result", result);
//       let data = {paging, result};    
//       console.log("data", data);
//       res.send(data);
//     })
//     .catch(err => res.send(err));
// });

// 전체조회
router.get("/", async (req, res) => {
  mysql.query("customer", "customerList")
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// 단건조회
router.get("/:id", (req, res) => {
  mysql.query("customer", "customerGet", [req.params.id])
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// 등록
router.post("/", (req, res) => {
  // res.send(req.body);
  mysql.query("customer", "customerInsert", [req.body])
  .then(result => res.send(result))
  .catch(err => res.send(err));
  // for(let i = 0; i < req.body.length; i++){    
  // }
});

// 수정
router.put("/:id", (req, res) => {  
  mysql.query("customer", "customerUpdate", [req.body, req.params.id])
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// 삭제
router.delete("/:id", (req, res) => {  
  mysql.query("customer", "customerDelete", req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

module.exports = router;