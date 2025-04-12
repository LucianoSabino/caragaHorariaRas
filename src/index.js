import { app } from "./server/server.js";
import { execSync } from "child_process";

// Rodando o comando prisma generate
try {
  execSync("npx prisma generate", { stdio: "inherit" });
  console.log("Prisma Client gerado com sucesso!");
} catch (error) {
  console.error("Erro ao gerar Prisma Client:", error);
  process.exit(1); // Se falhar, encerra a aplicação com erro
}

// Inicia o servidor após gerar o Prisma Client
app.listen(process.env.PORT, () => {
  console.log(`Api rodando na porta ${process.env.PORT || 8080}`);
});
