const express = require("express");
const router = express.Router();
const authorizeRole = require("../middleware/role.middleware")

const taskController = require("../controllers/task.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware.authUser , taskController.createTask);

router.get("/", authMiddleware.authUser, taskController.getAllTasks);

router.get("/:id", authMiddleware.authUser, taskController.getTaskById);

router.put("/:id", authMiddleware.authUser, taskController.updateTask );

router.delete( "/:id", authMiddleware.authUser,  taskController.deleteTask );

module.exports = router;