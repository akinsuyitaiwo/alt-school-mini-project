const express = require("express");
const userRouter = require("./user.js");
const taskRouter = require("./task.js");
const { verifyToken } = require("../middleware/auth.js");

const router = express.Router();

router.use("/users", userRouter);
router.use("/tasks", verifyToken, taskRouter);

module.exports = router;