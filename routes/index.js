const express = require("express");
const router = express();
const notesRouter = require("./notesRoute");

    app.use("/notesRoute", notesRouter);


module.exports = router;    