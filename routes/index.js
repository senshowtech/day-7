const express = require("express");
const router = express.Router();
const {
  blogCreateproject,
  blogArray,
  blogData,
  blogDetail,
  blogDelete,
  blogEdit,
  blogEditdetail,
} = require("../controller/array.js");

router.get("/", blogData);
router.get("/add-project", blogCreateproject);
router.get("/detail-project/:id", blogDetail);
router.get("/edit-project/:id", blogEditdetail);
router.get("/delete-project/:id", blogDelete);
router.post("/create-project", blogArray);
router.post("/edit-project", blogEdit);

module.exports = router;
