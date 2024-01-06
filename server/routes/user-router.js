let express = require("express");
const { registerUser } = require("../controllers/user-controller");
let router = express.Router();

router.post("/register", registerUser);

module.exports = router