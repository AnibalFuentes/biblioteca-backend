import { z } from "zod";

export const ObjectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Id no valido");

export const LibroCreateSchema = z
  .object({
    titulo: z.string().trim().min(1, "El titulo es obligatorio"),
    autor: z.string().trim().min(1, "El autor es obligatorio"),
    apublicacion: z.string().trim().optional(),
    editorial: z.string().trim().optional(),
    categoria: z.string().trim().optional(),
    sede: z.string().trim().optional(),
  })
  .strict();

export const LibroUpdateSchema = LibroCreateSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  { error: "Al menos un campo debe ser proporcionado para la actualizacion" },
);

export const LibroIdParamsSchema = z.object({
  id: ObjectIdSchema,
});
