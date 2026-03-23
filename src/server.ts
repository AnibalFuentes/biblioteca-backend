import { app } from "./app";
import { connectMongo } from "./database/mongoose";
async function bootstrap() {
  await connectMongo();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`Biblioteca API: http://localhost:${port}`);
  });
}

bootstrap().catch((err) => {
  console.log(`Failed to start server: ${err}`);
  process.exit(1);
});
