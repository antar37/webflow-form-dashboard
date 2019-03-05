const router = require("express").Router();
const formHook = require("./formHook");

// Form Hook routes
router.use("/formHook", formHook);

module.exports = router;
