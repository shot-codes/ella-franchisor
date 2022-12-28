import { PrismaClient } from "@prisma/client";
import users from "./data/users.js";

const prisma = new PrismaClient();

const runSeeders = async () => {
  await Promise.all(
    users.map(async (user) =>
      prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      })
    )
  );
};
runSeeders()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
