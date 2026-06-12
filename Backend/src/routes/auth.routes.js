const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")


const router = express.Router()

router.post("/register",authController.registercontroller)
router.post("/login",authController.logincontroller)

router.get("/get-me", authMiddleware.authUser, authController.getme)
router.get("/logout" , authController.logoutcontroller)

module.exports = router