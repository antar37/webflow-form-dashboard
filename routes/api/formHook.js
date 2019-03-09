let fs = require("fs");
const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// Matches with "/api/formHook"
router.route("/")
  .post(function(req, res){
    readWriteLog(req.body, function(data) {
      res.json(JSON.parse(data));
    });    
  });
  //.post(emailController.create);
 function readWriteLog(text, callback){

  fs.readFile("postLog.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    } else {
      console.log("Content Read!");
      let dataArray = JSON.parse(data);
      dataArray.push(text);
      fs.writeFile("postLog.txt", JSON.stringify(dataArray), function(error) {
        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        } else {
          console.log("Content Written!");
          callback(data);
        }
      });
    }
  });
 }
 
module.exports = router;