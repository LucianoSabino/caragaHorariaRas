// // src/server/database/prisma.js
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// export default prisma;

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  // Em produção, crie uma única instância do PrismaClient
  prisma = new PrismaClient();
} else {
  // Em desenvolvimento, use uma instância global para evitar recriações
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
