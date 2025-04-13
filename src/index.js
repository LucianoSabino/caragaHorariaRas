import { app } from "./server/server.js";
import { execSync } from "child_process";

// Verifica se o ambiente NÃO é de produção
if (process.env.NODE_ENV !== "production") {
  // Rodando o comando prisma generate em ambientes de desenvolvimento
  try {
    execSync("npx prisma generate", { stdio: "inherit" });
    console.log("Prisma Client gerado com sucesso!");
  } catch (error) {
    console.error("Erro ao gerar Prisma Client:", error);
    process.exit(1); // Se falhar, encerra a aplicação com erro
  }
}

// Define a porta padrão
const PORT = process.env.PORT || 8080;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Api rodando na porta ${PORT}`);
});
