var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

var verifyToken = require("../helper/tokenVerification");

const { User } = require("../dbModels/user");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// -----------------GET REQUESTS

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({
      message: "Successfully Fetched !",
      user: allUsers,
    });
  } catch (error) {
    console.error("Error fetching user by name:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.get("/:name", async (req, res) => {
//   const userName = decodeURIComponent(req.params.name);
//   console.log("test", req.params.id);
//   try {
//     const user = await User.findOne({ name: userName });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     return res.status(200).json(user);
//   } catch (error) {
//     console.error("Error fetching user by name:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "Successfully Fetched !",
      user: user,
    });
  } catch (error) {
    console.error("Error fetching user by name:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// -----------------POST REQUESTS

router.post("/", async (req, res) => {
  const newUser = new User({ ...req.body });
  const addedUser = await newUser.save();
  return res.status(201).json(addedUser);
});

router.post("/add", async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    const addUser = await newUser.save();
    return res.status(200).json({
      message: "Successfully Fetched !",
      user: addUser,
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).json({
      message: "Unable to add service at the moment !",
      user: null,
    });
  }
});

// -----------------PUT REQUESTS
router.put("/", async (req, res) => {
  try {
    const { userId, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { role: role } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//........................AUTH.................
//Signup api
router.post("/signup", (req, res) => {
  //Check if email already exist or not
  User.find({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data && data.length) {
        res.status(500).json({
          message: "That Email id is already taken ! Try another one...",
        });
      } else {
        //Hash the password
        bcrypt
          .hash(req.body.password, 8)
          .then((hash) => {
            //Create new user
            var newUser = new User({
              email: req.body.email,
              //save hashed password in db
              password: hash,
              name: req.body.name,
            });
            //Save user in db
            newUser
              .save()
              .then((user) => {
                res.status(200).json({
                  message: "Account Created !!!",
                  user,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err.message,
                });
              });
          })
          //If hashing failed then...
          .catch((err) => {
            ress.send(500).json({
              message: "Sorry can not create new account",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

//Login api
router.post("/login", (req, res, next) => {
  //Check if user exists with that email
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      //compare stores encrypted password
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(401).json({
            message: "Authentication Failed",
          });
        }
        if (result) {
          // create a token with following properties and a key
          jwt.sign(
            {
              username: user.username,
              email: user.email,
              name: user.name,
              _id: user._id,
            },
            "pramodCG",
            (err, token) => {
              if (err) {
                res.status(401).json({
                  message: "Authentication Failed",
                });
              } else {
                let userObj = {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                  createdAt: user.createdAt,
                  updatedAt: user.updatedAt,
                  image: user.image,
                };
                //send response
                res.status(200).json({
                  message: "Autherization Successful",
                  token,
                  user: userObj,
                });
              }
            }
          );
        } else {
          res.status(401).json({
            message: "Authentication Failed",
          });
        }
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: "Authentication Failed",
      });
    });
});

module.exports = router;
