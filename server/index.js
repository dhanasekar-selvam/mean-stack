const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();
const auth = require("./routes/api/auth");

// Passport Config
require("../server/config/passport")(passport);

//middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    // origin: [
    //   "http://localhost:3000",
    //   "http://192.168.31.189:3000",
    //   "http://localhost:4200",
    //   "http://192.168.31.189:4200",
    // ],

    credentials: true,
  })
);

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use(function (req, res, next) {
  next();
});

app.use("/api/auth", auth);

//Handle Production
if (process.env.NODE_ENV === "production") {
  //static folder
  app.use(express.static(__dirname + "/public/"));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
