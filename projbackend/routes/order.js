const express = require("express");
const router = express.Router();

const {isAdmin, isAutenticated, isSignedIn} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order");

//params
router.param("userId" , getUserById);
router.param("orderId", getOrderById);

//actual routes
//create route
router.post("/order/create/:userId",isSignedIn,isAutenticated,pushOrderInPurchaseList,updateStock,createOrder);

//read route
router.get("/order/all/:userId", isSignedIn,isAutenticated,isAdmin,getAllOrders);

//update route.
router.get("/order/status/:userId", isSignedIn,isAutenticated,isAdmin,getOrderStatus);
router.put("/order/:orderId/status/:userId", isSignedIn,isAutenticated,isAdmin,updateStatus);

module.exports = router;