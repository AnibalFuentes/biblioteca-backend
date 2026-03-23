import mongoose from "mongoose";

let isConnected = false;

export async function connectMongo() {
  if (isConnected) return;

  const uri = process.env.db_CONN || "";

  if (!uri) throw new Error("No hay conexion a la base de datos de MongoDB");

  await mongoose.set("strictQuery", true);
  await mongoose.connect(uri);

  isConnected = true;
  console.log("conectado a MongoDB");

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}
