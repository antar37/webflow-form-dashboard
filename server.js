const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const mailListener = require("./mailListener");
const emailController = require("./controllers/emailController");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/emailChecker",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

mongoose.connection.on('connected', function(){
  console.log("Connected to MongoDB!");
  mailListener.start();
})
mongoose.connection.on('error', function(err){
  console.log(err);
})

mailListener.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments
  console.log("emailParsed", mail);
  emailController.create({ body: {
    "title": "dummy title",
    "from": "<dummy@dumdum.com>",
    "date": "2019-01-25T21:26:38.000Z"
  }});
  // mail processing code goes here
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);