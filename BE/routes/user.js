const express = require("express");

const router = express.Router();
const {
  createUser,
  userSignIn,
  uploadProfile,
  signOut,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require("../middlewares/validation/user");
router.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to backend zone!" });
});
router.post("/create-user", validateUserSignUp, userVlidation, createUser);
router.post("/sign-in", validateUserSignIn, userVlidation, userSignIn);
router.post("/sign-out", isAuth, signOut);

module.exports = router;
