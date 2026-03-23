import { Schema, model, InferSchemaType, Types } from "mongoose";

const libroSchema = new Schema(
  {
    titulo: { type: String, required: true, unique: true, trim: true },
    autor: { type: String, required: true, trim: true },
    apublicacion: { type: String, trim: true },
    editorial: { type: String, trim: true },
    categoria: { type: String, trim: true },
    sede: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id?.toString?.();
        return ret;
      },
    },
  },
);

export type LibroDoc = InferSchemaType<typeof libroSchema> & {
  _id: Types.ObjectId;
};

export const Libro = model<LibroDoc>("Libro", libroSchema);
