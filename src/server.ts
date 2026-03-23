import { app } from "./app";
async function bootstrap() {
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`Biblioteca API: http://localhost:${port}`);
  });
}

bootstrap().catch((err) => {
  console.log(`Failed to start server: ${err}`);
  process.exit(1);
});
