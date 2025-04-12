import { app } from "./server/server.js";

app.listen(process.env.PORT, () => {
  console.log(`Api rodando na porta 8080`);
});
