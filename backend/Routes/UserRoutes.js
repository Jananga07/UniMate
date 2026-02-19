const express = require("express");
const router = express.Router();
const User = require("../Controllers/User");

router.post("/", User.addUsers);
router.post("/login", User.loginUser);
router.get("/:id",User.getById);

module.exports = router;