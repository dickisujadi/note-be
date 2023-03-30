import { Router } from "express";
import * as NotesController from "../controllers/notes";

const routes = Router();

routes.get("/", NotesController.getNotes);

export default routes;