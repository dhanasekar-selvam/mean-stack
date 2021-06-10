const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { forwardAuthenticated } = require("../../config/auth");
const jwt = require("jsonwebtoken");
//const secret_key = "9B7D712A14BD7C1BA55FACAC91725";
const router = express.Router();
const { encrypt, decrypt } = require("../../config/crypto");
var sessions = require("express-session");
var session = sessions;
const nodemailer = require("nodemailer");
session.iv = [];
session.forgotPwd = [];
var ObjectId = require("mongodb").ObjectID;

//test
router.get("/test", (req, res) => {
  res.send(200);
});

//get login
router.get("/", async (req, res) => {
  const users = await loadAuthCollection();
  res.send(await users.find({}).toArray());
});

//get user
router.post("/getuser", async (req, res) => {
  // console.log(req.body)
  const user = await findUser(req.body.email);
  return res.send(user);
  // const user = users.findOne({ "_id": ObjectId("60b08df900cb9f1693be611a") });
  // if (user) {
  //     res.send(user);

  // } else {
  //     res.status(404).send({ msg: "user not found", err })
  // }
});

router.get("/verifyEmail:content", (req, res) => {
  // console.log(req.params.content)
  // console.log(session.iv)
  var index = -1;
  var val = req.params.content;
  session.iv.find(function (item, i) {
    if (item.content === val) {
      index = i;
      return i;
    }
  });
  //console.log("index is", index);
  //console.log("data", session.iv[index].iv)
  if (index >= 0) {
    const data = {
      iv: session.iv[index].iv,
      content: session.iv[index].content,
    };
    const decrypted_token = decrypt(data);
    //console.log(decrypted_token);
    jwt.verify(decrypted_token, "secretkey", async (err, authData) => {
      if (err) {
        //console.log(err)
        res.redirect(
          `https://whispering-thicket-92019.herokuapp.com/expired?email=${session.userData[0].email}`
        );
        //res.sendStatus(403);å
      } else {
        const users = await loadAuthCollection();
        try {
          users.findOneAndUpdate(
            { email: authData.user },
            { $set: { verified: true } },
            { returnOriginal: false },
            (err, doc) => {
              res.redirect(
                "https://whispering-thicket-92019.herokuapp.com/login?msg=success"
              );
              // res.json({
              //     message: 'token verified',
              //     authData,
              //     user: doc.value
              // });
            }
          );
        } catch (e) {
          res.redirect(
            "https://whispering-thicket-92019.herokuapp.com/login?msg=error"
          );
          //console.log(e);
        }
      }
    });
  } else {
    res.status(409).send({ msg: "email address not verified" });
  }
});

router.get("/forgotPassword:content", (req, res) => {
  //session.iv[
  var index = -1;
  var val = req.params.content;
  session.forgotPwd.find(function (item, i) {
    if (item.content === val) {
      index = i;
      return i;
    }
  });
  //console.log("index is", index);
  //console.log("data", session.iv[index].iv)
  if (index >= 0) {
    const data = {
      iv: session.forgotPwd[index].iv,
      content: session.forgotPwd[index].content,
    };
    const decrypted_token = decrypt(data);
    //console.log(decrypted_token);
    jwt.verify(decrypted_token, "secretkey", (err, authData) => {
      if (err) {
        //console.log(err)
        res.redirect(
          `https://whispering-thicket-92019.herokuapp.com/expired?forgotemail=${session.userData[0].email}`
        );
        //res.sendStatus(403);
      } else {
        res.status(200);
        session.changePwd_email = authData.user;

        res.redirect("/api/auth/passwordChange");
      }
    });
  } else {
    res.status(409).send({ msg: "The account with this mail does not exist" });
  }
});

router.get("/passwordChange", (req, res) => {
  const user = { email: session.changePwd_email };
  res.redirect("https://whispering-thicket-92019.herokuapp.com/passwordchange");
  //res.send(["success", user]);

  //res.status(200).send();
});

router.post("/passwordchange", async (req, res) => {
  const users = await loadAuthCollection();
  const { password, password2 } = req.body;
  let errors = [];
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }
  if (errors.length > 0) {
    res.send(errors);
  } else {
    try {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          users.findOneAndUpdate(
            { email: session.changePwd_email },
            { $set: { password: req.body.password } },
            (err, doc) => {
              res.json({
                message: "success",
              });
            }
          );
        });
      });
    } catch (e) {
      res.json();
      //console.log(e)
    }
  }
});

router.post("/resentemail", async (req, res) => {
  console.log(req.body);
  const result = await findUser(req.body.email);
  if (result) {
    const encrypt_token = await getToken([result]);
    session.encrypt_tkn = encrypt_token;
    session.iv.push(encrypt_token);
    // console.log(session.encrypt_tkn)
    session.userData = [result];
    res.redirect("/api/auth/mail");
  } else {
    res.status(404).send({ msg: "user is not registered" });
  }
});

router.post("/forgotpassword", async (req, res) => {
  //console.log(req.body)
  const result = await findUser(req.body.email);
  //console.log(result)
  if (result) {
    const encrypt_token = await getToken([result]);
    session.encrypt_tkn = encrypt_token;
    session.userData = [result];
    session.forgotPwd.push(encrypt_token);
    res.redirect("/api/auth/forgotPassword/mail");
  }
});

async function findUser(data) {
  const users = await loadAuthCollection();
  const user = users.findOne({ email: data });
  if (user) {
    return user;
  } else {
    res.status(404).send({ msg: "user not found", err });
  }
}

router.get("/forgotPassword/mail", (req, res) => {
  // console.log("came")
  //console.log(session.userData[0].userName);
  //console.log(session.encrypt_tkn['content']);
  //console.log(encrypt_token)

  const output = `
    <html>
    <head>
    <style>
    a:link, a:visited {
    background-color: #1E90FF;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
</style>
    </head>
    <body>
    <center>
    <p>You request to change your password</p>
    <h3>Dear ${session.userData[0].userName} Please click the change password button to change the password</h3>
    <a href="https://whispering-thicket-92019.herokuapp.com/api/auth/forgotPassword${session.encrypt_tkn["content"]}" target="_blank">CHANGE PASSWORD</a>
    </center>
    </body>
    </html>
       
          `;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "slathvex@gmail.com",
      pass: "dhana123@mail",
    },
  });
  // setup email data with unicode symbols
  let mailOptions = {
    from: "dhanasekar809e@gmail.com", // sender address
    to: session.userData[0].email, // list of receivers
    subject: "Password Reset", // Subject line
    html: output, // html body
  };
  //console.log(mailOptions);

  //res.redirect(`/api/auth/forgotPassword${session.encrypt_tkn['content']}`)

  //send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send(["mail sent", session.userData]);
  });
});

//sent mail
router.get("/mail", (req, res) => {
  // console.log("came")
  //console.log(session.userData[0].userName);
  //console.log(session.encrypt_tkn['content']);
  //console.log(encrypt_token)

  const output = `
    <html>
    <head>
    <style>
    a:link, a:visited {
    background-color: #1E90FF;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
</style>
    </head>
    <body>
    <center>
    <p>You have a email verification request</p>
    <h3>Dear ${session.userData[0].userName} Please click the verify button to verify the email</h3>
    <a href="https://whispering-thicket-92019.herokuapp.com/api/auth/verifyEmail${session.encrypt_tkn["content"]}" target="_blank">VERIFY EMAIL</a>
    </center>
    </body>
    </html>
       
          `;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "slathvex@gmail.com",
      pass: "dhana123@mail",
    },
  });
  // setup email data with unicode symbols
  let mailOptions = {
    from: "dhanasekar809e@gmail.com", // sender address
    to: session.userData[0].email, // list of receivers
    subject: "Email Verification Request", // Subject line
    html: output, // html body
  };
  //console.log(mailOptions);

  //res.redirect(`/api/auth/verifyEmail${session.encrypt_tkn['content']}`)

  //send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(201).send({ data: session.userData });
    // res.render('contact', { msg: 'Email has been sent' });
  });
});

//post login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // return next(err);
      return res.send(err);
    }

    if (!user) {
      //res.status(400).send([user, "Cannot log in", info]);
      return res.send(info);
    }

    req.login(user, (err) => {
      res.send(["Logged in", user]);
    });
  })(req, res, next);
});

//post signup
router.post("/signup", async (req, res) => {
  const users = await loadAuthCollection();
  //req.body = req.body.data;
  const { userName, email, password, password2, mobile } = req.body;
  let errors = [];

  if (!userName || !email || !password || !password2 || !mobile) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.send({ err: errors });
  } else {
    try {
      users.findOne({ email: req.body.email }, async (err, result) => {
        if (result) {
          res.send({ err: [{ msg: "User Email is already exists" }] });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
              if (err) throw err;
              req.body.password = hash;
              const data = await users.insertOne({
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
                mobile: req.body.mobile,
                verified: false,
                createdAt: new Date(),
              });
              //console.log(data.ops)
              session.userData = data.ops;
              const encrypt_token = await getToken(data.ops);
              session.encrypt_tkn = encrypt_token;
              session.iv.push(encrypt_token);
              //res.send({ data: data.ops });
              // console.log(session.encrypt_tkn)
              res.redirect("/api/auth/mail");
              //res.status(201).send(token);
            });
          });
        }
      });
    } catch (e) {
      res.status(500).send({ err: e });
    }
  }
});

async function getToken(data) {
  try {
    //console.log(data);
    const user = data[0].email;
    //console.log(user)
    const token = jwt.sign({ user }, "secretkey", { expiresIn: "60sec" });
    return encrypt(token);
  } catch (e) {
    console.log(e);
  }
}

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

module.exports = router;
