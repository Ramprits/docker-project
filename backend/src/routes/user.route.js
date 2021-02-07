const { register, users } = require("../controllers/user.controller");

const router = require("express").Router();
router.route("/").get(users).post(register);
module.exports = router;
