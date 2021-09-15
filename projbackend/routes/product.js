const express = require("express");
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product");
const {isAdmin, isAutenticated, isSignedIn} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//params
router.param("userId" , getUserById);
router.param("productId", getProductById);

//actual routes

//create routes
router.post("/product/create/:userId", isSignedIn, isAutenticated, isAdmin, createProduct);

//read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//update routes
router.put("/product/:productId/:userId",isSignedIn, isAutenticated, isAdmin, updateProduct);

//delete routes
router.delete("/product/:productId/:userId",isSignedIn, isAutenticated, isAdmin, deleteProduct);


//listing routes
router.get("/products" , getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;