const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser, userPurchaseList} = require("../controllers/user");
const {isSignedIn, isAutenticated, isAdmin} = require("../controllers/auth");

router.param("userId" , getUserById);
router.get("/user/:userId", isSignedIn, isAutenticated, getUser);
router.put("/user/:userId", isSignedIn, isAutenticated, updateUser);
router.put("/orders/user/:userId", isSignedIn, isAutenticated, userPurchaseList);


module.exports = router;