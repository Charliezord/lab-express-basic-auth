const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard");


router.use(requireLogin); // why do we make a function here??
    const renderProfilePage = (req, res) => {
    res.render("main");
    };
router.get("/main", renderProfilePage);

    const renderPrivatePage = (req, res) => {
        res.render("private")
    };
    router.get("/private", renderPrivatePage);


// router.get("/main", (req, res, next) => {
//     res.render("main" { user: req.session.currentUser });
// }
// router.get("/main");
//   });


//   router.get("/private", (req, res, next) => {
//     res.render("private");
//   });



module.exports = router;