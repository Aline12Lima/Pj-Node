const {Router}= require("express");

const NotesControllers = require("../controllers/NotesControllers")

const notesRoutes = Router();


const notesController = new NotesControllers();



notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create); //middlewere para uma rota especifica


module.exports = notesRoutes;