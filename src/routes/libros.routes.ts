import { Router } from "express";
import { listarLibros } from "../controllers/libros.controller";

export const librosRouter = Router();

librosRouter.get("/", listarLibros);
