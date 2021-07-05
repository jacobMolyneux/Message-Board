var express = require("express");
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});
router.get("/new", function (req, res) {
  res.render("form");
});
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
