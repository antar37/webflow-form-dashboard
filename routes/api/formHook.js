let fs = require("fs");
const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// Matches with "/api/formHook"
router.route("/")
  .post(function(req, res){
    let text = JSON.stringify(req.body, null, 4);
    let log = "";
    fs.appendFile("postLog.txt", text+",", function(err) {
      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }
      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("Content Added!");
      }
    });

    fs.readFile("postLog.txt", "utf8", function(error, data) {
      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      } else {
        log = data;
      }
    });
    res.json(log);
  });
  //.post(emailController.create);

module.exports = router;