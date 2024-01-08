const { Router } = require("express");
const router = Router();

const mainController = require("../controller/mainController");

router.get("/", mainController.index);
router.get("/signup", mainController.signUp);
router.get("/signin", mainController.signIn);
router.post("/signup", mainController.postSignUp);

module.exports = router;
