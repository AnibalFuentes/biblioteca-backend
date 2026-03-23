import { librosRouter } from "./routes/libros.routes";
import express from "express";
import cors from "cors";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:4200,https://biblio-front-three.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/libros", librosRouter);
