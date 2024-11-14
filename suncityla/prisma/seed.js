import { PrismaClient } from "@prisma/client";

const adminSeeds = [
  {
    username: "admin_1",
    password: "admin_1_password",
    name: "Admin 1",
  },
  {
    username: "admin_2",
    password: "admin_2_password",
    name: "Admin 2",
  },
  {
    username: "admin_3",
    password: "admin_3_password",
    name: "Admin 3",
  },
];

const prismaClient = new PrismaClient();

const clearDb = async () => {
  await prismaClient.admin.deleteMany({});
};

const addData = async () => {
  for (const adminSeed of adminSeeds) {
    console.log(`Creating admin: ${adminSeed.username}`);

    await prismaClient.admin.create({
      data: {
        username: adminSeed.username,
        password: adminSeed.password,
        name: adminSeed.name,
      },
    });
  }
};

const seedDb = async () => {
  const prismaClient = new PrismaClient();
  await clearDb();
  await addData();
  await prismaClient.$disconnect();
};

seedDb().catch((error) => {
  console.error(error);
  process.exit(1);
});
