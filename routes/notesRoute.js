const notes =require("express").Router();
const {readFromFile, readAndAppend} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// Get route for retrieving all the notes
notes.get("/", (req, res) => {
    readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
notes.post("/", (req, res) => {
    console.log(req.body);

    const {title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, "./db/db.json");
        res.json(`Note added successfully!`);
    } else {
        res.errored(`Error in adding note, sorry`);
    }
});

module.exports = notesRoute;