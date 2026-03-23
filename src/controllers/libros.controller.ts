import { Request, Response } from "express";

export async function listarLibros(req: Request, res: Response) {
  return res.json({ message: "Listar libros" });
}
