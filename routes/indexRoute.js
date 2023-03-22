const express = require("express");
const router = express();
const notesRouter = require("./notesRoute");


    router.use("/notesRoute", notesRouter);


module.exports = router;    