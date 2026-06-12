const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role.middleware");

const adminController = require("../controllers/admin.controller");

router.get("/users", authMiddleware.authUser,  authorizeRole("admin"), adminController.getAllUsers);

module.exports = router;