


const express = require('express');
const route = express.Router();
const tasks = require('../models/to_do');
module.exports.addTasks = async function (req, res) {
    try {
        console.log('aman',req.body)
        const newTask = await tasks.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        });
        console.log("this is aman", newTask);

        return res.status(200).json(newTask);
    } catch (err) {
        console.log("error in Add tasks controller: ", err);
        return res.status(500).send("Error occurred while adding task");
    }
}