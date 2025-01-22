const express = require('express');
const addTaskController = require('../controller/taskController');

const taskRouter = express();

taskRouter.post("add-task", addTaskController)

module.export = taskRouter