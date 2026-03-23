import { Router } from "express";
import { crearLibro, listarLibros } from "../controllers/libros.controller";

export const librosRouter = Router();

librosRouter.get("/", listarLibros);
librosRouter.post("/", crearLibro);
