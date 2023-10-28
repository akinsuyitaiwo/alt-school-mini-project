const express = require("express");
const { createTask, readTask, readAllTasks, updateTask, deleteTask, updatePrefill } = require("../controllers/task.js");

const router = express.Router();

router.get("/create", (req, res) => {
	res.render("createTask");
});

router.get("/update/:taskId", updatePrefill);

router.post("/", createTask);

router.get("/", readAllTasks);
router.get("/:taskId", readTask);

router.post("/:taskId", updateTask);


router.get("/delete/:taskId", deleteTask);

module.exports = router;