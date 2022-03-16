const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");


router.get("/login", (req, res, next) => {
    res.render("login");
  });


  router.post("/login",  async (req, res, next) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        const hashFromDb = user.password;
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
        console.log(passwordCorrect ? "Yes" : "No");
        if (!passwordCorrect) {
            throw Error("Password incorrect");
        }
        req.session.currentUser = user;
        res.redirect("/profile");
  }  catch(err){
    res.render("login", { error: "Wrong username or password" });
    }
  });

  router.get("/profile", (req, res, next) => {
    res.render("profile");
  });



module.exports = router;
