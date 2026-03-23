import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodError, treeifyError } from "zod";

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      const zerr = err as ZodError;

      return res.status(400).json({
        success: false,
        msg: "Body invalido",
        errors: treeifyError(zerr),
      });
    }
  };
};

export const validateParams = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Usar type assertion para resolver el problema de tipos
      req.params = schema.parse(req.params) as any;
      next();
    } catch (err) {
      const zerr = err as ZodError;

      return res.status(400).json({
        success: false,
        msg: "Parametros invalidos",
        errors: treeifyError(zerr),
      });
    }
  };
};
