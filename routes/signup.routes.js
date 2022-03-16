const router = require("express").Router();
const userModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const { genSalt } = require("bcrypt");


router.get("/signup", (req, res, next) => {
    res.render("signup");
  });
  
  router.post("/signup",  async (req, res, next) => {
    const {username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('password', salt);
  
    const user = {
      username: username,
      password: hash,
    };
    await userModel.create(user);
    res.redirect('/login');
  });

  module.exports = router;
