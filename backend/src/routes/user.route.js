const { register, users, user } = require("../controllers/user.controller");

const router = require("express").Router();
router.route("/").get(users).post(register);
router.route("/:id").get(user);
module.exports = router;
