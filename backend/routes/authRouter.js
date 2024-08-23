const { googleLogin } = require("../controller/authController");

const router = require("express").Router();

router.get("/google", googleLogin)

module.exports = router;