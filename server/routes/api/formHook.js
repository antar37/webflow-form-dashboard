let fs = require("fs");
const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// Matches with "/api/formHook"
router.route("/")
  .post(function(req, res){
    let text = JSON.stringify(req.body, null, 4) + '\n -------------\n';
    fs.appendFile("postLog.txt", text, function(err) {
      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }
      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("Content Added!");
      }
    });
    res.end();
  })
  //.post(emailController.create);

module.exports = router;