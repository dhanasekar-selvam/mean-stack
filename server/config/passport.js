const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const MongoClient = require("mongodb").MongoClient;
// Load User model
// const User = require('../models/User');
async function loadAuthCollection() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://dhana:FIYZSzbY13XCVHwd@freecluster.jpl5h.mongodb.net/mevn?authSource=admin&replicaSet=atlas-dd4o1f-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    return client.db("mean").collection("users");
  } catch (e) {
    console.error(e);
  }
}
loadAuthCollection().catch(console.error);

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        const User = await loadAuthCollection();
        //console.log(User)
        // Match user
        User.findOne({ email: email }, (err, user) => {
          if (!user) {
            return done(null, false, {
              message: "This email is not registered",
            });
          }
          // console.log(password);
          //console.log(user.password);

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          });
        });

        passport.serializeUser(function (user, done) {
          done(null, user._id);
        });

        passport.deserializeUser(function (id, done) {
          User.findOne({ _id: id }, (err, user) => {
            done(err, user);
          });
        });
      }
    )
  );
};
