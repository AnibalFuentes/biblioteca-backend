import { Router } from "express";
import {
  actualizarLibro,
  crearLibro,
  eliminarLibro,
  listarLibros,
  obtenerLibro,
} from "../controllers/libros.controller";

export const librosRouter = Router();

librosRouter.post("/", crearLibro);
librosRouter.get("/", listarLibros);
librosRouter.get("/:id", obtenerLibro);
librosRouter.put("/:id", actualizarLibro);
librosRouter.delete("/:id", eliminarLibro);
